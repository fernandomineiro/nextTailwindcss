import React from "react";
import { useState } from "react";

import axios from "axios";

const CEP = () => {
  const [info, setInfo] = useState("");
  const [cep, setCep] = useState();

  const apiCall = async (e) => {
    e.preventDefault();
    const cep = e.target.elements.loc.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const req = axios.get(url);
    const res = await req;
    setInfo({
      logradouro: res.data.logradouro,
      bairro: res.data.bairro,
      localidade: res.data.localidade,
      uf: res.data.uf,
      city: res.data.city,
    });

    setCep(cep);
  };

  const pageCep = () => {
    return (
      <div>
        <div class="text-xs">
          informação do clima para a cep {cep}
          <hr></hr>
        </div>
        <div class="text-center text-gray-500">
          <div class="text-left">cidade : {info.city}</div>
          <div class="text-left">logradouro : {info.logradouro} &#8451;</div>
          <div class="text-left">bairro :{info.bairro} </div>
          <div class="text-left">localidade : {info.localidade} </div>
          <div class="text-left">estado : {info.uf} </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div class="w-full max-w-xs">
        <p class="text-center text-gray-500 text-xs">Informação do cep</p>
        <form
          onSubmit={apiCall}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              cep
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="cep"
              name="loc"
            ></input>
          </div>
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Pesquisar
          </button>
        </form>
        {pageCep && <CEP />}
      </div>
    </>
  );
};

export default CEP;
