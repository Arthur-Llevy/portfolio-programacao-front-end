"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Jogo() {
  const [numeroSecreto, setNumeroSecreto] = useState('');
  const [tentativas, setTentativas] = useState([]);
  const [inputNumeros, setInputNumeros] = useState('');

  useEffect(() => {
    setNumeroSecreto(gerarNumeroSecreto());
  }, []);

  const gerarNumeroSecreto = () => {
    let digitos = [];
    while (digitos.length < 4) {
      const digito = Math.floor(Math.random() * 10);
      if (!digitos.includes(digito)) {
        digitos.push(digito);
      }
    }
    return digitos.join('');
  };

  const eTentativaValida = (tentativa) => {
    return /^\d{4}$/.test(tentativa) && new Set(tentativa).size === 4;
  };

  const checarTentativa = (tentativa) => {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < tentativa.length; i++) {
      if (tentativa[i] === numeroSecreto[i]) {
        bulls++;
      } else if (numeroSecreto.includes(tentativa[i])) {
        cows++;
      }
    }
    return { bulls, cows };
  };

  const handleAdivinhar = () => {
    if (eTentativaValida(inputNumeros)) {
      const { bulls, cows } = checarTentativa(inputNumeros);
      setTentativas([{ tentativa: inputNumeros, bulls, cows }, ...tentativas]);
      if (bulls === 4) {
        alert('Parabéns, você adivinhou a senha!');
        resetarJogo();
      }
      setInputNumeros('');
    } else {
      alert('É necessário que os quatro números digitados sejam diferentes.');
    }
  };

  const resetarJogo = () => {
    setTentativas([]);
    setNumeroSecreto(gerarNumeroSecreto());
    setInputNumeros('');
  };

  const mostrarSenha = () => {
    alert(`A senha era: ${numeroSecreto}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-600">
      <Head>
        <title>Jogo das Senhas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Jogo da Senha</h1>
        <p className="text-center mb-6">Adivinhe o número secreto de 4 dígitos!</p>
        
        <div className="flex flex-col gap-4">
          <input
            type="text"
            maxLength="4"
            placeholder="Digite seu palpite"
            value={inputNumeros}
            onChange={(e) => setInputNumeros(e.target.value)}
            className="border-2 border-gray-300 rounded p-2 text-center focus:outline-none focus:border-blue-500"
          />
          <div className="flex gap-2 justify-center">
            <button
              onClick={handleAdivinhar}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Adivinhar
            </button>
            <button
              onClick={resetarJogo}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Resetar Jogo
            </button>
            <button
              onClick={mostrarSenha}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Mostrar Senha
            </button>
          </div>
        </div>

        <div className="mt-6">
          {tentativas.map((tentativa, index) => (
            <div key={index} className="mb-2">
              <p>
                {tentativa.tentativa.split('').map((digito, i) => (
                  <span
                    key={i}
                    className={
                      numeroSecreto[i] === digito
                        ? 'text-green-600 font-bold'
                        : numeroSecreto.includes(digito)
                        ? 'text-yellow-500 font-bold'
                        : 'text-gray-500'
                    }
                  >
                    {digito}
                  </span>
                ))}
                {' - '}
                {tentativa.bulls} Bulls, {tentativa.cows} Cows
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="block text-center mt-6 text-blue-500 hover:underline"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}