import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { stars } from "../assets/images";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../components";
import { Verify } from "../utils/Api";

// import { updateFirebasePassword } from "../service";

const MAX_FILE_SIZE_MB = 2; // Maximum file size in MB
const VALID_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [currentUser, setCurrentUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(stars);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [showError, setShowError] = useState("");
  const [isSigning, setIsSigning] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  console.log(userData, 'userData');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: currentUser?.displayName || "",
      phone: currentUser?.phone || "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  console.log(currentUser, "currentUser");

  // Check if the user logged in via Gmail
  const isGmailUser = userData?.loginType === "google.com";
  console.log(isGmailUser, "isGmailUser");
  console.log(userData?.loginType, "userData?.loginType");



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!VALID_IMAGE_TYPES.includes(file.type)) {
        setFileError(
          "Invalid file type. Only JPEG, PNG, and JPG files are allowed."
        );
        return;
      }
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setFileError(`File size exceeds ${MAX_FILE_SIZE_MB}MB.`);
        return;
      }
      setFileError("");
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadProfileImage = async (file) => {
    try {
      // Implement your image upload logic here
      // For demonstration, returning a placeholder URL
      return new Promise((resolve) => {
        setTimeout(() => resolve(URL.createObjectURL(file)), 1000);
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  //   const onSave = async (data) => {
  //     setIsSigning(true);
  //     setSuccessMessage(""); // Clear previous success message
  //     try {
  //       const { newPassword, confirmPassword } = data;
  //       // let profileImageURL = currentUser?.profile_image;
  //       let profileImageFile = selectedFile;

  //       // Ensure newPassword and confirmPassword match
  //       if (newPassword && confirmPassword) {
  //         if (newPassword !== confirmPassword) {
  //           setShowError("Passwords do not match.");
  //           return;
  //         }

  //         // Ensure newPassword is provided
  //         if (!newPassword) {
  //           setShowError("New password is required.");
  //           return;
  //         }

  //         // Update Firebase password
  //         const passwordUpdated = await updateFirebasePassword(newPassword);
  //         if (!passwordUpdated) {
  //           setShowError("Failed to update password. Please try again.");
  //           return;
  //         }
  //       }

  //       // If a new image is selected, prepare to upload it
  //       if (selectedFile) {
  //         profileImageFile = selectedFile;
  //       }

  //       // Construct the updated user data object
  //       const updatedUserData = {
  //         user_id: currentUser?.id || userData?.user?.id,
  //         name: data?.name,
  //         phone: data?.phone,
  //         // Add the profile_image key only if a new image was uploaded
  //         ...(profileImageFile !== currentUser?.profile_image && {
  //           profile_image: profileImageFile,
  //         }),
  //       };

  //       console.log(updatedUserData, "updatedUserData");

  //       // Update user profile on the server
  //       await updateUserProfile(updatedUserData);

  //       // Update Redux state with the new user data
  //       dispatch(updateUserData(updatedUserData));

  //       // Optionally, refetch the user data after a successful update
  //       fetchUserData();
  //       setSuccessMessage("Profile updated successfully!");
  //       setTimeout(() => {
  //         setSuccessMessage(""); // Clear the success message after 5 seconds
  //       }, 3000);
  //     } catch (error) {
  //       console.error("Error saving profile:", error);
  //     } finally {
  //       setIsSigning(false);
  //     }
  //   };

  const fetchUserData = async () => {
    try {
      const response = await Verify();
      const data = await response.user;
      console.log(data, "data on fetch");

      setCurrentUser(data);
      // dispatch(updateUserData(data));
      setValue("name", data?.displayNames|| "");
      setValue("phone", data?.phone || "");
      setImagePreview(data?.profile_image);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [setValue]);

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Prevent numbers in text fields
  const handleNameKeyPress = (e) => {
    const charCode = e.keyCode || e.which;
    const charStr = String.fromCharCode(charCode);
    if (!/^[a-zA-Z]+$/.test(charStr)) {
      e.preventDefault();
    }
  };

  // Prevent non-numeric input in phone number and limit length
  const handlePhoneKeyPress = (e) => {
    const charCode = e.keyCode || e.which;
    const charStr = String.fromCharCode(charCode);
    if (!/^[0-9]+$/.test(charStr)) {
      e.preventDefault();
    }
  };
  console.log(currentUser, 'currentUser >>>>>>> profile');
  
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-4">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              {/* <div className="flex items-center overflow-hidden">
                <img
                  src={imagePreview}
                  alt="user profile"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <input type="file" onChange={handleFileChange} />
                  {fileError && <p className="text-red-500">{fileError}</p>}
                </div>
              </div> */}

              <div className="my-6">
                <h2 className="text-3xl font-black text-tn_dark">
                  Welcome {currentUser?.displayName || "N/A"}
                </h2>
                <p>You can change your profile information here.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit(() => { })} className="mt-4 w-full">
              <span className="flex-wrap flex space-x-0 sm:space-x-2 sm:flex-nowrap">
                <Input
                  label="Name"
                  onKeyPress={handleNameKeyPress} // Prevent numbers
                  {...register("name")}
                  placeholder="Enter your name"
                  className="mb-6"
                />
                <Input
                  label="Phone"
                  type="tel"
                  maxLength={15} // Restrict length to 15 digits
                  onKeyPress={handlePhoneKeyPress} // Prevent alphabets
                  {...register("phone", {
                    validate: {
                      lengthCheck: (value) =>
                        (value.length >= 11 && value.length <= 15) ||
                        "Phone number must be between 11 and 15 digits",
                    },
                  })}
                  placeholder="Enter your phone number"
                  className="mb-6 sm:mb-0"
                />
              </span>
              {!isGmailUser && (
                <span className="mb-6 block">
                  <span className="flex-wrap flex space-x-0 sm:space-x-2 sm:flex-nowrap">
                    <Input
                      label="New Password"
                      type="password"
                      {...register("newPassword")}
                      placeholder="Enter new password"
                      // disabled={isGmailUser}
                      className="mb-6 sm:mb-0"
                    />
                    <Input
                      label="Confirm Password"
                      type="password"
                      {...register("confirmPassword")}
                      placeholder="Confirm new password"
                    // disabled={isGmailUser}
                    />
                  </span>
                  {showError && (
                    <p className="text-red-500 text-sm">{showError}</p>
                  )}
                </span>
              )}

              <Button
                type="submit"
                className={`w-full  ${isSigning ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                disabled={isSigning}
              >
                {isSigning ? "Saving..." : "Save changes"}
              </Button>
              {successMessage && (
                <p className="text-green-500 mt-3">{successMessage}</p>
              )}
            </form>
          </div>
          <div className="w-full md:w-1/2 hidden md:flex md:ml-8  justify-end">
            <img src={stars} alt="" className="w-full md:w-[400px]" />
          </div>
        </div>
      </div>


    </>
  );
};

export default Profile;