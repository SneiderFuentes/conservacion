import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  type IObjNursery,
  type IObjVegetalMaterial,
  type IObjChange,
  type ISolicitud,
  type IObjCreaSolicitud,
  type IObjFuncionarioResponsable,
  type IObjUnidadOrganizacional,
  type IObjViveros,
  type IObjAprobacionCoordViveros,
  type IObjEstadoAprobacion,
  type IObjFuncionarioSolicitudes,
  type IObjGestionarSolicitudFCoordinador,
  type IObjIdSolicitudDetalleCoor,
  type IObjItemSolicitud,
  type IObjSolicitudDetalle,
  IObjCerrarSolicitud,
} from '../../interfaces/solicitud_material';
import { type Persona } from "../../../../../interfaces/globalModels";



const initial_state_change: IObjChange = {
  id_cambio_de_etapa: null,
  id_bien: null,
  id_vivero: null,
  agno_lote: null,
  nro_lote: null,
  cod_etapa_lote_origen: "",
  fecha_cambio: (new Date().toString()),
  cantidad_disponible_al_crear: null,
  cantidad_movida: null,
  altura_lote_en_cms: null,
  observaciones: "",
  id_persona_cambia: null,
  ruta_archivo_soporte: "",
}

const initial_statate_current_vegetal_material: IObjVegetalMaterial = {
  id_inventario_vivero: null,
  id_bien: null,
  codigo_bien: "",
  nombre: "",
  agno_lote: null,
  nro_lote: null,
  cod_etapa_lote: null,
  etapa_lote: "",
  cantidad_disponible: null,
}

const initial_state_current_nursery = {
  id_vivero: null,
  nombre: '',
  cod_municipio: '',
  direccion: '',
  area_mt2: null,
  area_propagacion_mt2: null,
  tiene_area_produccion: false,
  tiene_areas_pep_sustrato: false,
  tiene_area_embolsado: false,
  cod_tipo_vivero: null,
  fecha_inicio_viverista_actual: null,
  cod_origen_recursos_vivero: null,
  fecha_creacion: null,
  en_funcionamiento: true,
  fecha_ultima_apertura: null,
  justificacion_apertura: '',
  fecha_cierre_actual: null,
  justificacion_cierre: null,
  vivero_en_cuarentena: false,
  fecha_inicio_cuarentena: null,
  justificacion_cuarentena: null,
  ruta_archivo_creacion: null,
  activo: true,
  item_ya_usado: true,
  id_viverista_actual: null,
  id_persona_crea: null,
  id_persona_abre: null,
  id_persona_cierra: null,
  id_persona_cuarentena: null,
};
const initial_state_person: Persona = {
  id_persona: null,
  tipo_persona: "",
  tipo_documento: "",
  numero_documento: "",
  primer_nombre: "",
  segundo_nombre: "",
  primer_apellido: "",
  segundo_apellido: "",
  nombre_completo: "",
  razon_social: "",
  nombre_comercial: "",
  tiene_usuario: true,
}

const initial_state_current_vivero : IObjViveros = {
    id_solicitud_vivero: null,
    solicitud_abierta: true,
    fecha_cierra_solicitud: null,
    revisada_responsable: null,
    estado_aprobacion_responsable:"",
    justificacion_aprobacion_responsable: "",
    fecha_aprobacion_responsable: null,
    gestionada_viveros: true,
    id_despacho_viveros: null,
    observacion_cierre_no_dispo_viveros : "",
    fecha_cierre_no_dispo: null,
    revisada_coord_viveros: true,
    estado_aprobacion_coord_viveros: "",
    justificacion_aprobacion_coord_viveros: "",
    fecha_aprobacion_coord_viv: "",
    solicitud_anulada_solicitante:true,
    justificacion_anulacion_solicitante: "",
    fecha_anulacion_solicitante: null,
    id_vivero_solicitud:null,
    id_persona_solicita: null,
    id_unidad_org_del_solicitante: null,
    id_unidad_para_la_que_solicita: null,
    id_funcionario_responsable_und_destino: null,
    id_unidad_org_del_responsable: null,
    id_persona_cierre_no_dispo_viveros: null,
    id_persona_coord_viveros: null,
}

const initial_state_current_solicitud: IObjCreaSolicitud = {
    nro_solicitud : null,
    fecha_solicitud : null,
    id_vivero_solicitado : null,
    nro_info_tecnico : null,
    motivo: "",
    observaciones: "",
    id_unidad_para_la_que_solicita: null,
    id_funcionario_responsable: null,
    id_unidad_org_del_responsable: null,
    cod_municipio_destino: null,
    nombre_predio_destino: "",
    direccion_destino: "",
    fecha_retiro_material: null,
    ruta_archivo_info_tecnico : "",
    id_persona_solicita: null,
    id_unidad_org_del_solicitante: null,
}

const initial_state_current_funcionario : IObjFuncionarioResponsable = {
    id_persona: null,
    // tipo_documento
    cod_tipo_documento: "",
    nombre: "",
    precargado: true,
    activo: true,
    item_ya_usado: true,
    // estado_civil": 
    cod_estado_civil: "",
    nombreestadocivil: "",
    precargadoestadocivil: true,
    activoestadocivil: true,
    item_ya_usadoestadocivil: true,
    representante_legal: "",
    nombre_unidad_organizacional_actual: "",
    tipo_persona: "",
    numero_documento: null,
    digito_verificacion: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    nombre_comercial: "",
    razon_social: "",
    pais_residencia: "",
    municipio_residencia: "",
    direccion_residencia:"",
    direccion_residencia_ref: "",
    ubicacion_georeferenciada: "",
    direccion_laboral: "",
    direccion_notificaciones: "",
    pais_nacimiento: "",
    fecha_nacimiento: null,
    sexo: "",
    fecha_asignacion_unidad: null,
    es_unidad_organizacional_actual: "",
    email: "",
    email_empresarial: "",
    telefono_fijo_residencial: null,
    telefono_celular: "",
    telefono_empresa: "",
    cod_municipio_laboral_nal: "",
    cod_municipio_notificacion_nal: "",
    telefono_celular_empresa: "",
    telefono_empresa_2: "",
    cod_pais_nacionalidad_empresa: null,
    acepta_notificacion_sms:true,
    acepta_notificacion_email:true,
    acepta_tratamiento_datos:true,
    id_cargo: null,
    id_unidad_organizacional_actual: null,
}

const initial_state_current_unidad : IObjUnidadOrganizacional = {
    id_unidad_organizacional: null,
    nombre: "",
    codigo: null,
    cod_tipo_unidad: "",
    cod_agrupacion_documental: "",
    unidad_raiz: true,
    id_organigrama: null,
    id_nivel_organigrama: null,
    id_unidad_org_padre: null,
}

const initial_state_current_solicitud_funcionario: IObjFuncionarioSolicitudes = {
  id_solicitud_vivero:null,
  nro_solicitud: null,
  fecha_solicitud: "",
  id_persona_solicita: null,
  primer_nombre_persona_solicita: "",
  primer_apellido_persona_solicita: "",
  id_unidad_para_la_que_solicita: null,
  nombre_unidad_para_la_que_solicita: "",
}

const initial_state_current_solicitud_detalle: IObjSolicitudDetalle = {
  id_solicitud_vivero: null,
  nro_solicitud: null,
  fecha_solicitud:"",
  motivo:"",
  observaciones: "",
  con_municipio_destino: "",
  direccion_destino: "",
  nombre_predio_destino: "",
  fecha_retiro_material:"",
  nro_info_tecnico:null,
  ruta_archivo_info_tecnico: "",
  solicitud_abierta: true,
  fecha_cierra_solicitud: "",
  revisada_responsable: true,
  estado_aprobacion_responsable: "",
  justificacion_aprobacion_responsable: "",
  fecha_aprobacion_responsable: "",
  gestionada_viveros: true,
  id_despacho_viveros:null,
  observacion_cierre_no_dispo_viveros: "",
  fecha_cierre_no_dispo: "",
  revisada_coord_viveros: true,
  estado_aprobacion_coord_viveros: "",
  justificacion_aprobacion_coord_viveros: "",
  fecha_aprobacion_coord_viv: "",
  solicitud_anulada_solicitante: true,
  justificacion_anulacion_solicitante: "",
  fecha_anulacion_solicitante: "",
  id_vivero_solicitud:null,
  id_persona_solicita:null,
  id_unidad_org_del_solicitante:null,
  id_unidad_para_la_que_solicita:null,
  id_funcionario_responsable_und_destino:null,
  id_unidad_org_del_responsable:null,
  id_persona_cierre_no_dispo_viveros:null,
  id_persona_coord_viveros:null,
}

const initial_state_current_item_solicitud: IObjItemSolicitud ={
  id_item_solicitud_viveros: null,
  id_solicitud_viveros: null,
  nro_posicion: null,
  id_bien: null,
  cod_tipo_elemento_vivero: "",
  codigo_bien: "",
  nombre_bien: "",
  cantidad: null,
  observaciones: "",
}

const initial_state_current_aprobacion_funcionario : IObjEstadoAprobacion = {
  estado_aprobacion_responsable: "",
  justificacion_aprobacion_responsable: "",
  fecha_aprobacion_responsable: "",
  revisada_responsable: true,
  solicitud_abierta: true,
  fecha_cierra_solicitud: "",
}

const initial_state_current_solicitud_detalle_coordinador: IObjIdSolicitudDetalleCoor = {
  id_solicitud_vivero: null,
  nro_solicitud: null,
  fecha_solicitud: "",
  motivo: "",
  observaciones: "",
  con_municipio_destino: "",
  direccion_destino: "",
  nombre_predio_destino: "",
  fecha_retiro_material: "",
  nro_info_tecnico: null,
  ruta_archivo_info_tecnico: "",
  solicitud_abierta:null,
  fecha_cierra_solicitud: "",
  revisada_responsable: true,
  estado_aprobacion_responsable: "",
  justificacion_aprobacion_responsable: "",
  fecha_aprobacion_responsable: "",
  gestionada_viveros: true,
  id_despacho_viveros: null,
  observacion_cierre_no_dispo_viveros: "",
  fecha_cierre_no_dispo: "",
  revisada_coord_viveros:true,
  estado_aprobacion_coord_viveros: "",
  justificacion_aprobacion_coord_viveros: "",
  fecha_aprobacion_coord_viv: "",
  solicitud_anulada_solicitante: true,
  justificacion_anulacion_solicitante: "",
  fecha_anulacion_solicitante: "",
  id_vivero_solicitud: null,
  id_persona_solicita: null,
  id_unidad_org_del_solicitante: null,
  id_unidad_para_la_que_solicita: null,
  id_funcionario_responsable_und_destino: null,
  id_unidad_org_del_responsable: null,
  id_persona_cierre_no_dispo_viveros: null,
  id_persona_coord_viveros: null,
}

const initial_state_current_gestion_solicitudes: IObjGestionarSolicitudFCoordinador= {
  estado_aprobacion_responsable: "",
  justificacion_aprobacion_responsable: "",
  fecha_aprobacion_responsable: "",
  revisada_responsable: true,
  solicitud_abierta: true,
  fecha_cierra_solicitud: "",
}

const initial_state_current_aprobacion_coordinador: IObjAprobacionCoordViveros = {
  estado_aprobacion_coord_viveros: "",
  justificacion_aprobacion_coord_viveros:"",
  fecha_aprobacion_coord_viv:"",
  revisada_coord_viveros: "",
  solicitud_abierta: "",
  fecha_cierra_solicitud: "",
}

const initial_state_current_cierre_solicitud : IObjCerrarSolicitud={
  observacion_cierre_no_dispo_viveros:"",
  fecha_cierre_no_dispo: "",
  id_persona_cierre_no_dispo_viveros: null,
  solicitud_abierta:"",
  fecha_cierra_solicitud: "",
  gestionada_viveros: "", 
}

const initial_state: ISolicitud = {
  nurseries: [],
  current_nursery: initial_state_current_nursery,
  vegetal_materials: [],
  current_vegetal_material: initial_statate_current_vegetal_material,
  stage_changes: [],
  current_stage_change: initial_state_change,
  persons: [],
  changing_person: initial_state_person,
  viveros : [],
  current_vivero: initial_state_current_vivero,
  solicitudes: [],
  current_solicitud: initial_state_current_solicitud,
  funcionarios: [],
  current_funcionario: initial_state_current_funcionario,
  unidades:[],
  current_unidad: initial_state_current_unidad,
  solicitudes_funcionarios: [],
  current_solicitud_funcionario : initial_state_current_solicitud_funcionario,
  solicitudes_detalle: [],
  current_solicitud_detalle : initial_state_current_solicitud_detalle,
  item_solicitud:[],
  current_item_solicitud: initial_state_current_item_solicitud,
  aprobaciones_funcionarios: [],
  current_aprobacion_funcionario: initial_state_current_aprobacion_funcionario,
  solicitudes_detalle_coordinador: [],
  current_solicitud_detalle_coordinador: initial_state_current_solicitud_detalle_coordinador,
  gestionar_solicitudes: [],
  current_gestion_solicitudes: initial_state_current_gestion_solicitudes,
  aprobaciones_coordinadores:[],
  current_aprobacion_coordinador: initial_state_current_aprobacion_coordinador,
  cierres_solicitudes: [],
  current_cierre_solicitud: initial_state_current_cierre_solicitud,
}

export const solicitudmaterialSlice = createSlice({
  name: 'solicitud',
  initialState: initial_state,
  reducers: {
    set_nurseries: (state: ISolicitud, action: PayloadAction<IObjNursery[]>) => {
      state.nurseries = action.payload;
    },
    set_current_nursery: (state: ISolicitud, action: PayloadAction<IObjNursery>) => {
      state.current_nursery = action.payload;
    },
    set_vegetal_materials: (state: ISolicitud, action: PayloadAction<IObjVegetalMaterial[]>) => {
      state.vegetal_materials = action.payload;
    },
    set_current_vegetal_material: (state: ISolicitud, action: PayloadAction<IObjVegetalMaterial>) => {
      state.current_vegetal_material = action.payload;
    },

    set_stage_changes: (state: ISolicitud, action: PayloadAction<IObjChange[]>) => {
      state.stage_changes = action.payload;
    },
    set_current_stage_change: (state: ISolicitud, action: PayloadAction<IObjChange>) => {
      state.current_stage_change = action.payload;
    },
    set_persons: (state: ISolicitud, action: PayloadAction<Persona[]>) => {
      state.persons = action.payload;
    },
    set_changing_person: (state: ISolicitud, action: PayloadAction<Persona>) => {
      state.changing_person = action.payload;
    },
    set_viveros: (state: ISolicitud, action: PayloadAction<IObjViveros[]>) => {
        state.viveros = action.payload;
      },
     set_current_vivero: (state: ISolicitud, action: PayloadAction<IObjViveros>) => {
        state.current_vivero = action.payload;
      },
    set_solicitudes: (state: ISolicitud, action: PayloadAction<IObjCreaSolicitud[]>) => {
        state.solicitudes = action.payload;
      },
    set_current_solicitud: (state: ISolicitud, action: PayloadAction<IObjCreaSolicitud>) => {
        state.current_solicitud = action.payload;
      },
    set_funcionarios: (state: ISolicitud, action: PayloadAction<IObjFuncionarioResponsable[]>) => {
        state.funcionarios = action.payload;
      },
    set_current_funcionario: (state: ISolicitud, action: PayloadAction<IObjFuncionarioResponsable>) => {
        state.current_funcionario = action.payload;
      },
    set_unidades: (state: ISolicitud, action: PayloadAction<IObjUnidadOrganizacional[]>) => {
        state.unidades = action.payload;
      },
    set_current_unidad: (state: ISolicitud, action: PayloadAction<IObjUnidadOrganizacional>) => {
        state.current_unidad = action.payload;
      },
    set_solicitudes_funcionarios: (state: ISolicitud, action: PayloadAction<IObjFuncionarioSolicitudes []>) => {
        state.solicitudes_funcionarios = action.payload;
      }, 
    set_current_solicitud_funcionario: (state: ISolicitud, action: PayloadAction<IObjFuncionarioSolicitudes>) => {
        state.current_solicitud_funcionario = action.payload;
      },
    set_solicitudes_detalle: (state: ISolicitud, action: PayloadAction<IObjSolicitudDetalle []>) => {
        state.solicitudes_detalle = action.payload;
      },
    set_current_solicitud_detalle: (state: ISolicitud, action: PayloadAction<IObjSolicitudDetalle>) => {
        state.current_solicitud_detalle = action.payload;
      },
    set_item_solicitud: (state: ISolicitud, action: PayloadAction<IObjItemSolicitud[]>) => {
        state.item_solicitud = action.payload;
      },
    set_current_item_solicitud: (state: ISolicitud, action: PayloadAction<IObjItemSolicitud>) => {
        state.current_item_solicitud= action.payload;
      },
    set_aprobaciones_funcionarios: (state: ISolicitud, action: PayloadAction<IObjEstadoAprobacion []>) => {
        state.aprobaciones_funcionarios = action.payload;
      },
    set_current_aprobacion_funcionario: (state: ISolicitud, action: PayloadAction<IObjEstadoAprobacion>) => {
        state.current_aprobacion_funcionario = action.payload;
      },
    set_solicitudes_detalle_coordinador: (state: ISolicitud, action: PayloadAction<IObjIdSolicitudDetalleCoor []>) => {
        state.solicitudes_detalle_coordinador = action.payload;
      },
    set_current_solicitud_detalle_coordinador: (state: ISolicitud, action: PayloadAction<IObjIdSolicitudDetalleCoor>) => {
        state.current_solicitud_detalle_coordinador = action.payload;
      },
    set_gestionar_solicitudes: (state: ISolicitud, action: PayloadAction<IObjGestionarSolicitudFCoordinador []>) => {
        state.gestionar_solicitudes = action.payload;
      },
    set_current_gestion_solicitudes: (state: ISolicitud, action: PayloadAction<IObjGestionarSolicitudFCoordinador>) => {
        state.current_gestion_solicitudes = action.payload;
      },
    set_aprobaciones_coordinadores: (state: ISolicitud, action: PayloadAction<IObjAprobacionCoordViveros []>) => {
        state.aprobaciones_coordinadores = action.payload;
      },
    set_current_aprobacion_coordinador: (state: ISolicitud, action: PayloadAction<IObjAprobacionCoordViveros>) => {
        state.current_aprobacion_coordinador = action.payload;
      }, 
    set_cierres_solicitudes: (state: ISolicitud, action: PayloadAction<IObjCerrarSolicitud []>) => {
        state.cierres_solicitudes = action.payload;
      },
    set_current_cierre_solicitud: (state: ISolicitud, action: PayloadAction<IObjCerrarSolicitud>) => {
        state.current_cierre_solicitud = action.payload;
      },
 },
});
export const { set_changing_person, set_persons, set_current_nursery, set_nurseries, set_vegetal_materials, set_stage_changes, set_current_stage_change, set_current_vegetal_material, set_current_funcionario,set_current_solicitud,set_current_unidad,set_current_vivero,set_funcionarios,set_unidades,set_viveros,set_solicitudes, set_aprobaciones_coordinadores,set_aprobaciones_funcionarios,set_current_aprobacion_coordinador,set_current_aprobacion_funcionario,set_current_gestion_solicitudes,set_current_item_solicitud,set_current_solicitud_detalle,set_current_solicitud_detalle_coordinador,set_current_solicitud_funcionario,set_gestionar_solicitudes,set_item_solicitud,set_solicitudes_detalle,set_solicitudes_detalle_coordinador,set_solicitudes_funcionarios} = solicitudmaterialSlice.actions;
