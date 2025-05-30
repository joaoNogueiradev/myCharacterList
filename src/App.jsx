import { useState } from "react";
import "./App.css";
import ModalStory from "./components/ModalStory";
import { useFetch } from "./hooks/useFetch";
import loadingImg from "./assets/loadingImg.gif"

const url = "https://6835be8fcd78db2058c2f60b.mockapi.io/characters";

function App() {
  const { data: chars, loading } = useFetch(url);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  console.log(chars);

  return (
    <>
      <div className="h-screen flex items-center text-center justify-center">
        {loading && <img src={loadingImg}/>}
        {!loading && (
          <ul>
            <h1 className="font-bold m-15 text-3xl ">CHARACTERS LIST</h1>
            {chars &&
              chars.map((character, index) => {
                return (
                  <li
                  key={character.id}
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedCharacter(character);
                  }}
                  className="text-5xl sm:text-6xl text-gray-700 font-bold cursor-pointer w-screen h-[200px] flex items-center justify-between px-12 border-y-2 border-gray-200 hover:bg-gray-100 transition-all duration-300"
                style={{
                backgroundImage: `url(${character.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: index % 2 === 0 ? 'left 120px top' : 'right 120px top',
                backgroundSize: 'auto 160%',
              }}
                >
                  {/* Espaço transparente para texto */}
                  <span
                    className="bg-white/80 px-6 py-3 rounded-xl shadow-md backdrop-blur-sm"
                    style={{
                      marginLeft: index % 2 === 0 ? 'auto' : '0',
                      marginRight: index % 2 !== 0 ? 'auto' : '0',
                    }}
                  >
                    {character.name.toUpperCase()}
                  </span>
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
                  FROM: {selectedCharacter.media}
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
