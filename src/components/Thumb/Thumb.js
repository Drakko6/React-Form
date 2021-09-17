import React, { useState, useEffect } from "react";

const Thumb = ({ file }) => {
  const [loading, setloading] = useState(false);
  const [thumb, setThumb] = useState(undefined);

  useEffect(() => {
    if (!file) {
      return;
    }

    setloading(true);
    let reader = new FileReader();

    reader.onloadend = () => {
      setloading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  if (!file) {
    return null;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return <img src={thumb} alt={file.name} height={100} width={100} />;
};

export default Thumb;
