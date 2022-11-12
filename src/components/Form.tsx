import React from "react";
import { trpc } from "../utils/trpc";

const Form = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("test");
    const [postcode, setPostcode] = React.useState("test");
  const [cityState, setCityState] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [instagramName, setInstagramName] = React.useState("");
    const [yearMakeModel, setYearMakeModel] = React.useState("");
    const [carMake, setCarMake] = React.useState("test");
    const [carModel, setCarModel] = React.useState("test");
  const [engineMods, setEngineMods] = React.useState("");
  const [suspensionMods, setSuspensionMods] = React.useState("");
  const [exteriorMods, setExteriorMods] = React.useState("");
  const [interiorMods, setInteriorMods] = React.useState("");
  const [linkToPhotos, setLinkToPhotos] = React.useState("");
  const [photogUsername, setPhotogUsername] = React.useState("");
  const [attachedImages, setAttachedImages] = React.useState([]);

    const submitForm = () => {
        trpc.useMutation([
          "example.submitForm",
          {
            firstName,
            lastName,
            postcode,
            email,
            instagramName,
            carMake,
            carModel,
            engineMods,
            suspensionMods,
            exteriorMods,
            interiorMods,
            linkToPhotos,
            photogUsername,
          },
        ],);
    } 

  return (
    <div className="mx-auto flex flex-col items-center justify-center min-h-screen w-full bg-black text-white">
      <div className="flex flex-col w-[50%] justify-center items-center ">
        <div className="flex">
          <div className="flex flex-col">
            <label className="" htmlFor="">
              Full Name*
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-[85%] text-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="" htmlFor="">
              City/State*
            </label>
            <input
              type="text"
              value={cityState}
              onChange={(e) => setCityState(e.target.value)}
              className="w-[85%] text-black"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label className="" htmlFor="">
              Contact Email*
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[85%] text-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="" htmlFor="">
              Instagram Username*
            </label>
            <input
              type="text"
              value={instagramName}
              onChange={(e) => setInstagramName(e.target.value)}
              className="w-[85%] text-black"
            />
          </div>
        </div>
        <label className="p-2" htmlFor="">
          Vehicle Year/Make/Model*
        </label>
        <input type="text" value={yearMakeModel} onChange={(e) => setYearMakeModel(e.target.value)} />
        <label className="p-2" htmlFor="">
          Engine Modifications*
        </label>
        <input type="text" value={engineMods} onChange={(e) => setEngineMods(e.target.value)} />
        <label className="p-2" htmlFor="">
          Suspension Modifications*
        </label>
        <input type="text" value={suspensionMods} onChange={(e) => setSuspensionMods(e.target.value)} />
        <label className="p-2" htmlFor="">
          Exterior Modifications*
        </label>
        <input type="text" value={exteriorMods} onChange={(e) => setExteriorMods(e.target.value)} />
        <label className="p-2" htmlFor="">
          Interior Modifications*
        </label>
        <input type="text" value={interiorMods} onChange={(e) => setInteriorMods(e.target.value)} />
        <label className="p-2" htmlFor="">
          Link to HD Photos*
        </label>
        <input type="text" value={linkToPhotos} onChange={(e) => setLinkToPhotos(e.target.value)} />
        <label className="p-2" htmlFor="">
          Photographer Instagram Username*
        </label>
        <input type="text" value={photogUsername} onChange={(e) => setPhotogUsername(e.target.value)} />
        <input type="file" />
        <div className="p-2" />
        <button className="bg-white text-black w-[25%]" onClick={submitForm}>
          Submit
        </button>
        <div className="p-2" />
      </div>
    </div>
  );
};

export default Form;
