import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { addMovie } from "../store/reducers/adminSlice";
import type { FormAddMovie } from "../features/admin/types/admin.types";
import InputField from "../features/admin/components/InputField";


function AddMoviePage() {
  const { register, handleSubmit } = useForm<FormAddMovie>();
  // const dispatch = useDispatch();
  const onSubmit = (data: FormAddMovie) => {
    console.log(data)
    // dispatch(addMovie(data));
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
          register={register("title")}
          type="text" 
          id="title" 
        />
        <InputField 
          label="Category" 
          name="category"
          register={register("category")}
          type="text" 
          id="category" 
        />
        <InputField 
          label="Release Date" 
          name="releaseDate" 
          register={register("releaseDate")}
          type="date" 
          id="releaseDate" 
        />
        <div className="flex flex-wrap gap-3">
          <InputField 
            label="Duration Hour" 
            name="durationHour" 
            register={register("durationHour")}
            type="number" 
            id="durationHour" 
          />
          <InputField 
            label="Duration Minute" 
            name="durationMinute" 
            register={register("durationMinute")}
            type="number" 
            id="durationMinute" 
          />
        </div>
        <InputField 
          label="Director Name" 
          name="directorName" 
          register={register("directorName")}
          type="text" 
          id="directorName" 
        />
        <InputField 
          label="Cast" 
          name="cast" 
          register={register("cast")}
          type="text" 
          id="cast" 
        />
        <InputField 
          label="Genre" 
          name="genres" 
          register={register("genres")}
          type="text" 
          id="genre" 
        />
        <InputField 
          label="Synopsis" 
          name="synopsis" 
          register={register("synopsis")}
          type="text" 
          id="synopsis" 
        />
        <div>
          <label className="text-title-info-first font-normal text-base">Time</label>
          <div className="flex gap-3">
            <InputField 
              label="" 
              name="time" 
              register={register("time_start")}
              type="time" 
              id="time" 
              customStyle="cursor-pointer"
            />
            <div className="w-2 flex items-center font-bold">_</div>
            <InputField 
              label="" 
              name="time" 
              register={register("time_end")}
              type="time" 
              id="time" 
              customStyle="cursor-pointer"
            />
          </div>
        </div>
        
        <button className="bg-orange text-white py-2 rounded font-bold active:scale-95 transition-all" type="submit">Add Movie</button>
      </form>
    </>
  );
}

export default AddMoviePage;
