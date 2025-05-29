import { useState } from "react";
import "./App.css";
import ModalStory from "./components/ModalStory";
import { useFetch } from "./hooks/useFetch";

const url = "https://6835be8fcd78db2058c2f60b.mockapi.io/characters";

function App() {
  const { data: chars, loading } = useFetch(url);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  console.log(chars);

  return (
    <>
      <div className="h-screen flex items-center text-center justify-center">
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
                    className="text-xl cursor-pointer"
                  >
                    {character.name.toUpperCase()}
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
                <h2 className='font-bold '>
                  from: {selectedCharacter.media}
                </h2>
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
