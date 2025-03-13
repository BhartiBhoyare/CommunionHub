import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="flex items-center justify-center p-6 md:m-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center mt-6 p-4 md:p-6 rounded-lg bg-[#ecf4cb] w-full max-w-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl text-[#526039] font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Add New Event
        </motion.h2>
        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            placeholder="Event Title"
            className="w-full p-2 border rounded outline-[#526039]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="date"
            className="w-full p-2 border rounded outline-[#526039]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.select
            className="w-full p-2 border rounded outline-[#526039]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          >
            <option value="Add Category">Add Category</option>
            <option value="Religion">Religion</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </motion.select>

          <div className="w-full">
            <motion.input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded outline-[#526039]"
              onChange={handleImageChange}
              whileFocus={{ scale: 1.05 }}
            />
            {image && (
              <motion.div
                className="relative mt-4 w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold">Image Preview:</p>
                <img
                  src={image}
                  alt="Event"
                  className="mt-2 w-full rounded-lg shadow-lg"
                />
                <motion.button
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CiCircleRemove className="h-6 w-6 text-[#526039]" />
                </motion.button>
              </motion.div>
            )}
          </div>
          <motion.textarea
            placeholder="Event Description"
            className="w-full p-2 border rounded outline-[#526039] h-24"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>

          <motion.button
            className="flex w-full justify-center px-4 py-2 bg-[#526039] text-white rounded-lg"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add Event
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddEvent;
