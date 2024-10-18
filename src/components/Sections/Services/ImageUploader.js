'use client'
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

const ImageUploader = ({ value, onChange }) => {
  const handleUpload = useCallback((result) => {
    try {
      const newImageUrl = result.info.secure_url;
      onChange(newImageUrl); // Call the `onChange` prop with the uploaded image URL
    } catch (error) {
      console.error("Upload error:", error);
    }
  }, [onChange]);

  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset="ojbpv8wu"
      options={{ maxFiles: 5 }} // Allow up to 5 image uploads
    >
      {({ open }) => (
        <div
          className="relative flex flex-col items-center cursor-pointer gap-4 text-neutral-400 border-neutral-300 border-2 border-dashed transition hover:opacity-70"
          onClick={() => open?.()}
        >
          <TbPhotoPlus size={50} />
          <p className="ml-2">Click to upload images</p>
          {value.length > 0 && (
            <div className="flex gap-2">
              {value.map((imgSrc, index) => (
                <Image
                  key={index}
                  width={100}
                  height={100}
                  src={imgSrc}
                  alt={`Uploaded Image ${index + 1}`}
                  style={{ objectFit: 'cover' }}
                  priority={index === 0} // Optimize the first image
                />
              ))}
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUploader;
