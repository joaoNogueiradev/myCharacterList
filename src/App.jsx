import { useState } from "react";
// import "./App.css";
import ModalStory from "./components/ModalStory";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/characters";

function App() {
  const { data: chars, loading } = useFetch(url);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  console.log(chars);

  return (
    <>
      <div className="character-list">
        {loading && <p>Carregando dados...</p>}
        {!loading && (
          <ul>
            {chars &&
              chars.map((character) => {
                return (
                  <li
                    key={character.id}
                    onClick={() => {
                      setOpenModal(true);
                      setSelectedCharacter(character);
                    }}
                  >
                    {character.name} - {character.media}
                    <div></div>
                  </li>
                );
              })}
            {selectedCharacter && (
              <ModalStory
                isOpen={openModal}
                onClose={() => {
                  setOpenModal(false);
                  setSelectedCharacter(null);
                }}
              >
                {selectedCharacter.story}
              </ModalStory>
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
