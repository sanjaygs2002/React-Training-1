import { useForm } from "react-hook-form";
function FormHook() {
  // const {register, handleSubmit,reset}= useForm();

  // function data(data){
  //     console.log("Form submitted data is ",data);
  //     reset()
  // }

  // return(
  //     <>
  //     <form onSubmit={handleSubmit(data)}>
  //         <input {...register("email")} />
  //         <button type="submit"> Submit</button>
  //     </form>
  //     </>
  // )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const password = watch("password");
  function data(data) {
    console.log("Form submitted data is ", data);
    reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit(data)}>
        <input
          {...register("email", {
            required: "Email is required",
            message: "Invalid message",
          })}
          type="email"
          placeholder="Enter the email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          {...register("password", {
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
              message: "Invalid Length",
              required: "password is required",
            },
          })}
          type="password"
          placeholder="Enter the password"
        />

        {errors.password && <p>{errors.password.message}</p>}
        {password && <p>Password Length: {password.length}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default FormHook;
