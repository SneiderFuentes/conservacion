import { useState } from 'react';
import { api } from '../../../../api/axios';
import { Chip, Grid } from '@mui/material';
import { type ToastContent, toast } from 'react-toastify';
import BuscarModelo from "../../../../components/partials/getModels/BuscarModelo";
import { type GridColDef } from '@mui/x-data-grid';
import {  useAppDispatch } from '../../../../hooks';
import { set_genera_bajas, set_current_genera_baja,set_bienes_bajas,set_current_bien_baja, set_viveristas, set_current_viverista, set_historicos_viveristas, set_current_historico_viverista, set_nuevos_viveristas, set_current_nuevo_viverista} from '../store/slice/viveroSlice';
import { type IDespacho } from "../interfaces/vivero";