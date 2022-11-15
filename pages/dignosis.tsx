import axios from "axios";
import React from "react";

function dignosis() {
  const onChange = async (e: any) => {
    const img = e.target.files[0];
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("testfield", "hi");
    formData.append("photo", img);
    console.log(formData);
    try {
      const data = await axios.post(
        "http://127.0.0.1:8000/face/image/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        name="profile_img"
        onChange={onChange}
      ></input>
    </div>
  );
}

export default dignosis;
