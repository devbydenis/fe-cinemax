import { useForm, type UseFormRegister } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/reducers/adminSlice";

interface FormData {
  title: string;
  category: string;
  releaseDate: string;
  date: string;
  time: string;
  durationHour: number;
  durationMinute: number;
  directorName: string;
  genres: string[];
  cast: string[];
  synopsis: string;
}

function AddMoviePage() {
  const { register, handleSubmit } = useForm<FormData>();
  const dispatch = useDispatch();
  const onSubmit = (data: FormData) => {
    dispatch(addMovie(data));
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3/4 mx-auto bg-white py-12 px-9 rounded-lg flex flex-col gap-5 shadow-md my-10">
        <h1 className="text-2xl font-bold">Add New Movie</h1>
        <div className="flex flex-col gap-2">
          <p className="text-title-info-first font-normal text-base">Upload Image</p>
          <label className="bg-orange w-24 text-center text-white text-xs font-semibold rounded py-2" htmlFor="upload">Upload</label>
          <input
            className="hidden"
            type="file"
            name="upload"
            id="upload"
          />
        </div>
        <InputField 
          label="Title" 
          name="title"
          register={register}
          type="text" 
          id="title" 
        />
        <InputField 
          label="Category" 
          name="category"
          register={register}
          type="text" 
          id="category" 
        />
        <InputField 
          label="Release Date" 
          name="releaseDate" 
          register={register}
          type="date" 
          id="releaseDate" 
        />
        <div className="flex flex-wrap gap-3">
          <InputField 
            label="Duration Hour" 
            name="durationHour" 
            register={register}
            type="number" 
            id="durationHour" 
          />
          <InputField 
            label="Duration Minute" 
            name="durationMinute" 
            register={register}
            type="number" 
            id="durationMinute" 
          />
        </div>
        <InputField 
          label="Director Name" 
          name="directorName" 
          register={register}
          type="text" 
          id="directorName" 
        />
        <InputField 
          label="Cast" 
          name="cast" 
          register={register}
          type="text" 
          id="cast" 
        />
        <InputField 
          label="Genre" 
          name="genres" 
          register={register}
          type="text" 
          id="genre" 
        />
        <InputField 
          label="Synopsis" 
          name="synopsis" 
          register={register}
          type="text" 
          id="synopsis" 
        />
        <InputField 
          label="Date" 
          name="date" 
          register={register}
          type="date" 
          id="date" 
        />
        <InputField 
          label="Time" 
          name="time" 
          register={register}
          type="time" 
          id="time" 
        />
        <button className="bg-orange text-white py-2 rounded font-bold active:scale-95 transition-all" type="submit">Add Movie</button>
      </form>
    </>
  );
}


type InputFieldProps = {
  label: string;
  name: keyof FormData;
  id: string;
  type: string;
  register: UseFormRegister<FormData>
};

function InputField({ label, name, id, type, register }: InputFieldProps) {
  
  return (
    <div className="flex flex-col gap-2">
      <label className="text-title-info-first font-normal text-base" htmlFor={id}>{label}</label>
      <input
        className="focus:outline-orange border-1 border-gray-300 h-14 rounded px-3"
        type={type}
        {...register(name)}
        id={id}
      />
    </div>
  )
}

// function InputFieldDuration({ label, name, id }: InputFieldProps) {
  
//   return (
//     <div className="flex flex-col gap-2">
//       <label className="text-title-info-first font-normal text-base" htmlFor={id}>{label}</label>
//       <div className="flex gap-3">
//         <input
//           className="focus:outline-orange max-w-20 border-1 border-gray-300 h-14 rounded px-3"
//           type="number"
//           name={`${name}Hour`}
//           id={`${id}Hour`}
//           min={0}
//         />
//         <input
//           className="focus:outline-orange max-w-20 border-1 border-gray-300 h-14 rounded px-3"
//           type="number"
//           name={`${name}Minute`}
//           id={`${id}Minute`}
//           min={0}
//         />
//       </div>
//     </div>
//   )
// }

export default AddMoviePage;
