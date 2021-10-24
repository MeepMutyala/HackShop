import React from "react";
import Swal from "sweetalert2";

// rafce
const Header = () => {
  const HandleButton = () => {
    Swal.fire({
      icon: "Instructions",
      title: "Hangman",
      text: "Guess the random grocery! Don't let the hangman get completely drawn!",
      confirmButtonColor: "#1e8f4b",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "info",
          title: "Information",
          text: "There are 24 possible words",
          confirmButtonColor: "#1e8f4b",
        });
      }
    });
  };

  return (
    <>
      <h1>Shopping Hangman</h1>
      <p>Guess the word!</p>
      <button onClick={HandleButton}>Rules</button>
    </>
  );
};

export default Header;
