import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      {" "}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center font-serif">Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /[A-Za-z]{5}/,
                    message: "error message",
                  },
                })}
                type="Email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text-alt">Alt label</span>
              </label>
            </div>
            <input {...register("firstName", { required: true })} />
            {errors.firstName?.type === "required" && "First name is required"}

            <input {...register("lastName", { required: true })} />
            {errors.lastName && <p>Last name is required</p>}

            <input
              {...register("mail", { required: "Email Address is required" })}
            />
            <p>{errors.mail?.message}</p>

            <input type="submit" />
          </form>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primary"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
