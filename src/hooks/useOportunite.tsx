import { useState } from "react";
import { useCallback } from "react";
import { Oportunite } from "../interfaces";
import { oportuniteService } from "../services";

export const useOportunite = () => {
    const [oportunites,setOportunites] = useState<Oportunite[]>([]);
    const getAll = useCallback(async () => {
        const { status, data } = await oportuniteService.getAll();
        if(status !== 200) throw new Error();

        setOportunites(data);
    }, [])
    return{
        oportunites,
        getAll,
    }
}