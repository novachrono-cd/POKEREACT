import React, { createContext, useContext, useState, useEffect } from "react";

export interface PokemonCard {
    id: number;
    name: string;
    type: string;
    image: string;
    isFavorite?: boolean;
}

export interface Trainer {
    id: number;
    fullname: string;
    document: { type: string; dni: string };
    dataRegistrer: string;
    region: {type: string}

}

interface PokemonContextType {
    entrenadores: Trainer[];
    entrenadorActivo: Trainer | null;
    mochilaActual: PokemonCard[];

    guardarPokemonEnMochila: (pokemon : PokemonCard) => void;
    registrarEntrenador: (usuario : Trainer) => void;
    seleccionarEntrenador: (usuario : Trainer) => void;
    seleccionarFavorito: (pokemonId : number) => void;
    eliminarPokemonEnMochila: (pokemon : PokemonCard) => void;
}

const PokemonContext = createContext< PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<( children: React.ReactNode)> = ({ children }) => {
    const [entrenadores,setEntrenadores] = useState<Trainer[]>([]);
    const [entrenadorActivo,setEntrenadorActivo] = useState< Trainer | null >;
    const [mochilaActual,setMochilaActual] = useState<PokemonCard[]>([]);
}