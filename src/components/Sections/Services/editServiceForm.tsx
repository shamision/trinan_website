import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect, useState } from 'react';
import ImageUploader from './ImageUploader'; // Import the ImageUploader component
import { IoArrowBackOutline } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";

const EditServiceForm = ({ serviceId, closeModal }) => {
  const [step, setStep] = useState(1); // State to manage the form steps
  const [isLoading, setIsLoading] = useState(true); // State to manage data loading

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    control,
    reset, // Used for setting initial values
  } = useForm({
    defaultValues: {
      title: '',
      summary: '',
      description: '',
      procedure: '',
      serviceImages: [],
      pastProjects: [],
    },
  });

  // Manage pastProjects using useFieldArray
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'pastProjects',
  });

  const imageSrc = watch('serviceImages');
  const pastProjects = watch('pastProjects');

  // Fetch the service data when component mounts
  useEffect(() => {
    const fetchServiceData = async () => {
      if (!serviceId) return;

      try {
        const response = await fetch(`/api/services/${serviceId}`);
        const data = await response.json();

        // Populate the form with existing service data
        reset({
          title: data.title,
          summary: data.summary,
          description: data.description,
          procedure: data.procedure,
          serviceImages: data.serviceImages,
          pastProjects: data.pastProjects || [],
        });

        setIsLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };

    if (serviceId) {
      fetchServiceData();
    }
  }, [serviceId, reset]);

  const handleImageUpload = (uploadedImage) => {
    setValue('serviceImages', [...(imageSrc || []), uploadedImage]);
  };

  const onSubmit = async (formData) => {
    const requestData = {
      ...formData,
      id: serviceId, // Pass service ID for editing
    };

    await fetch('/api/services', {
      method: 'POST', // Use POST for both create and edit
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (closeModal) {
      closeModal();
    }
    window.location.reload(); // Refresh the homepage
  };

  const handleNextStep = () => {
    if (imageSrc.length > 0 && step === 1) {
      setStep(2);
    } else {
      alert('Please upload at least one image.');
    }
  };

  const handlePrevtStep = () => {
    setStep(1);
  };

  const handleAddProject = () => {
    if (fields.length < 3) {
      append({ title: '', description: '', projectImages: [] });
    } else {
      alert('You can only add up to 3 projects.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <div className="flex flex-col gap-8 py-24">
          <h2 className="text-3xl font-bold w-7/12 mx-auto text-[#111B47]">EDIT SERVICE</h2>

          <div className="w-7/12 mx-auto flex flex-col gap-3">
            <label className="text-[#111B47] font-semibold">Title</label>
            <input
              type="text"
              placeholder="Service Title"
              {...register('title', { required: 'Title is required' })}
              className={`focus:outline-none text-[#505F98] border-b ${errors.title ? 'border-red-500' : ''}`}
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          <div className="w-7/12 mx-auto flex flex-col gap-3">
            <label className="text-[#111B47] font-semibold">Summary</label>
            <input
              type="text"
              placeholder="Service Summary"
              {...register('summary', { required: 'Summary is required' })}
              className={`focus:outline-none text-[#505F98] border-b ${errors.summary ? 'border-red-500' : ''}`}
            />
            {errors.summary && <p className="text-red-500">{errors.summary.message}</p>}
          </div>

          <div className="w-7/12 mx-auto flex flex-col gap-3">
            <label className="text-[#111B47] font-semibold">Description</label>
            <textarea
              rows={5}
              cols={6}
              placeholder="Service Description"
              {...register('description', { required: 'Description is required' })}
              className={`border focus:outline-none text-[#505F98] ${errors.description ? 'border-red-500' : ''}`}
            />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>

          <div className="w-7/12 mx-auto flex flex-col gap-3">
            <label className="text-[#111B47] font-semibold">Procedure</label>
            <textarea
              rows={5}
              cols={6}
              placeholder="Service Procedure"
              {...register('procedure', { required: 'Procedure is required' })}
              className={`border focus:outline-none text-[#505F98] ${errors.procedure ? 'border-red-500' : ''}`}
            />
            {errors.procedure && <p className="text-red-500">{errors.procedure.message}</p>}
          </div>

          <div className="w-7/12 mx-auto flex flex-col gap-3">
            <label className="text-[#111B47] font-semibold">Service Images</label>
            <ImageUploader value={imageSrc} onChange={handleImageUpload} />
            {errors.serviceImages && <p className="text-red-500">{errors.serviceImages.message}</p>}
          </div>

          <button
            type="button"
            className="bg-[#111B47] font-semibold mx-auto w-[150px] h-[40px] text-white rounded-md mt-[30px] flex justify-center items-center gap-2"
            onClick={handleNextStep}
          >
            Next <GrLinkNext />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-8 py-24">
          <h2 className="text-3xl font-bold w-7/12 mx-auto text-[#111B47]">Edit Past Projects</h2>

          {fields.map((item, index) => (
            <div key={item.id} className="flex flex-col gap-8">
              <h3 className="text-xl font-bold w-7/12 mx-auto text-[#111B47]">Project {index + 1}</h3>

              <div className="w-7/12 mx-auto flex flex-col gap-3">
                <label className="text-[#111B47]">Project Title</label>
                <input
                  type="text"
                  placeholder="Project Title"
                  {...register(`pastProjects.${index}.title`, { required: 'Project title is required' })}
                  className="focus:outline-none text-[#505F98] border-b"
                />
              </div>

              <div className="w-7/12 mx-auto flex flex-col gap-3">
                <label className="text-[#111B47]">Project Description</label>
                <textarea
                  rows={5}
                  cols={6}
                  placeholder="Project Description"
                  {...register(`pastProjects.${index}.description`, { required: 'Project description is required' })}
                  className="border focus:outline-none text-[#505F98]"
                />
              </div>

              <div className="w-7/12 mx-auto flex flex-col gap-3">
                <label className="text-[#111B47]">Project Images</label>
                <ImageUploader
                  value={watch(`pastProjects.${index}.projectImages`)}
                  onChange={(uploadedImage) =>
                    setValue(`pastProjects.${index}.projectImages`, [
                      ...(watch(`pastProjects.${index}.projectImages`) || []),
                      uploadedImage,
                    ])
                  }
                />
              </div>

              <button
                type="button"
                className="text-red-500 underline w-7/12 mx-auto"
                onClick={() => remove(index)}
              >
                Remove Project
              </button>
            </div>
          ))}

          <div className="w-7/12 mx-auto flex gap-3">
            <button
              type="button"
              className="bg-[#111B47] font-semibold w-[150px] h-[40px] text-white rounded-md mt-[30px] flex justify-center items-center gap-2"
              onClick={handlePrevtStep}
            >
              <IoArrowBackOutline /> Prev
            </button>

            <button
              type="button"
              className="bg-[#111B47] font-semibold w-[150px] h-[40px] text-white rounded-md mt-[30px]"
              onClick={handleAddProject}
            >
              Add Project
            </button>

            <button
              type="submit"
              className="bg-[#111B47] font-semibold w-[150px] h-[40px] text-white rounded-md mt-[30px]"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default EditServiceForm;
