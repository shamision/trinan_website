import { useForm, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import ImageUploader from './ImageUploader'; // Import the ImageUploader component
import { IoArrowBackOutline } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";

const ServiceForm = ({ closeModal }) => {
  const [step, setStep] = useState(1); // State to manage the form steps

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues: {
      title: '',
      summary: '',
      description: '',
      procedure: '',
      serviceImages: [],
      pastProjects: [{ title: '', description: '', projectImages: [] }],
    },
  });

  // Manage pastProjects using useFieldArray
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'pastProjects',
  });

  const imageSrc = watch('serviceImages');

  const handleImageUpload = (uploadedImage) => {
    setValue('serviceImages', [...(imageSrc|| []), uploadedImage]);
  };

  const onSubmit = async (formData) => {
    await fetch('/api/services', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Close the popup
    if (closeModal) {
      closeModal();
    }

    // Refresh the homepage
    window.location.reload();
  };

  // Handle moving to the next step
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

  // Handle adding past projects (maximum of 3)
  const handleAddProject = () => {
    if (fields.length < 3) {
      append({ title: '', description: '', projectImages: [] });
    } else {
      alert('You can only add up to 3 projects.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <div className="flex flex-col gap-8 py-24">
          <h2 className="text-3xl font-bold w-7/12 mx-auto text-[#111B47]">CREATE A NEW SERVICE</h2>
          <div className="w-7/12 mx-auto flex flex-col gap-3">
            <label className="text-[#111B47] font-semibold">Title</label>
            <input
              type="text"
              placeholder="Your Service Title"
              {...register('title', { required: 'Title is required' })}
              className={`focus:outline-none text-[#505F98] border-b ${errors.title ? 'border-red-500' : ''}`}
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>


          <div className="w-7/12 mx-auto flex flex-col gap-3">
            <label className="text-[#111B47] font-semibold">Summary</label>
            <input
              type="text"
              placeholder="Your Service in Summary"
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
            placeholder="Type your Service Description here"
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
              placeholder="Type the Procedure for obtaining the service here"
              {...register('procedure', { required: 'Procedure is required' })}
              className={`border focus:outline-none text-[#505F98] ${errors.procedure ? 'border-red-500' : ''}`}
            />
            {errors.procedure && <p className="text-red-500">{errors.procedure.message}</p>}
          </div>


          <div className="w-7/12 mx-auto flex flex-col gap-3">
          {/* Image Uploader */}
          <label className="text-[#111B47] font-semibold">Service Images</label>
          <ImageUploader value={imageSrc} onChange={(uploadedImage) =>
                    setValue(`serviceImages`, [
                      ...(watch(`serviceImages`) || []),
                      uploadedImage,
                    ])} />
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
          <h2 className="text-3xl font-bold w-7/12 mx-auto text-[#111B47]">Add Past Projects</h2>

          {fields.map((item, index) => (
            <div key={item.id} className="flex flex-col gap-8">
              <h3 className="text-xl font-bold w-7/12 mx-auto text-[#111B47]">Project {index + 1}</h3>
              
              <div className="w-7/12 mx-auto flex flex-col gap-3">
                <label className="text-[#111B47]">Project Title</label>
                <input
                  type="text"
                  placeholder="Your Project Title"
                  {...register(`pastProjects.${index}.title`, { required: 'Project title is required' })}
                  className="focus:outline-none text-[#505F98] border-b"
                />
              </div>

              <div className="w-7/12 mx-auto flex flex-col gap-3">
                <label className="text-[#111B47]">Project Description</label>
                <textarea
                rows={5}
                cols={6}
                placeholder="Your Project Description"
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

              <div className="w-7/12 mx-auto flex flex-col gap-3">
                <button
                  type="button"
                  className="text-red-500 underline"
                  onClick={() => remove(index)}
                >
                  Remove Project
                </button>
              </div>
            </div>
          ))}
          <div className="w-7/12 mx-auto flex gap-3">
            <button
              type="button"
              className="bg-[#111B47] font-semibold mx-auto w-[150px] h-[40px] text-white rounded-md mt-[30px] flex justify-center items-center gap-2"
              onClick={handlePrevtStep}
            >
              <IoArrowBackOutline /> Back
            </button>

            <button
              type="button"
              className="bg-green-900 font-semibold mx-auto w-[150px] h-[40px] text-white rounded-md mt-[30px]"
              onClick={handleAddProject}
            >
              Add Project
            </button>


            <button
              type="submit"
              className="bg-red-900 font-semibold mx-auto w-[150px] h-[40px] text-white rounded-md mt-[30px]"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ServiceForm;
