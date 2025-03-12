import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

const AddEvent = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Add Category");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && category !== "Add Category" && description && image) {
      addEvent({ title, date, category, description, location: "TBD", image });
      setTitle("");
      setDate("");
      setCategory("Add Category");
      setDescription("");
      setImage(null);
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center mt-6 p-4 rounded-lg bg-[#ecf4cb] w-full max-w-lg">
        <h2 className="text-3xl text-[#526039] font-bold mb-4">
          Add New Event
        </h2>
        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Title"
            className="w-full p-2 border rounded outline-[#526039]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            className="w-full p-2 border rounded outline-[#526039]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            className="w-full p-2 border rounded outline-[#526039]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Add Category">Add Category</option>
            <option value="Religion">Religion</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>

          <div className="w-full">
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded outline-[#526039]"
              onChange={handleImageChange}
            />
            {image && (
              <div className="relative mt-4 w-full">
                <p className="text-sm font-semibold">Image Preview:</p>
                <img
                  src={image}
                  alt="Event"
                  className="mt-2 w-full rounded-lg shadow-lg"
                />
                <button
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                >
                  <CiCircleRemove className="h-6 w-6 text-[#526039]" />
                </button>
              </div>
            )}
          </div>
          <textarea
            placeholder="Event Description"
            className="w-full p-2 border rounded outline-[#526039] h-24"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button
            className="flex w-full justify-center px-4 py-2 bg-[#526039] text-white rounded-lg"
            type="submit"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
