import { useEffect, useState } from 'react';
import { api } from '../../../../api/axios';
import { type Persona } from "../../../../interfaces/globalModels";
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import BuscarModelo from "../../../../components/partials/getModels/BuscarModelo";
import { type GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { type AuthSlice } from '../../../auth/interfaces';
import { set_nurseries, set_vegetal_materials, set_stage_changes, set_changing_person, set_persons,set_current_funcionario,set_current_solicitud,set_current_unidad,set_current_vivero,set_funcionarios,set_unidades,set_viveros,set_solicitudes } from '../store/slice/solicitudmaterialSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { get_person_document_service, get_person_id_service, get_persons_service } from '../store/thunks/solicitudmaterialThunks';

