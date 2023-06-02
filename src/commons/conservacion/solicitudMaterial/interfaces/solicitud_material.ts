import { type Persona } from '../../../../interfaces/globalModels';

export interface ISolicitud {
  nurseries: IObjNursery[];
  current_nursery: IObjNursery;
  vegetal_materials: IObjVegetalMaterial[];
  current_vegetal_material: IObjVegetalMaterial;
  stage_changes: IObjChange[];
  current_stage_change: IObjChange;
  persons: Persona[];
  changing_person: Persona;
  viveros:IObjViveros [];
  current_vivero:IObjViveros;
  solicitudes: IObjCreaSolicitud[];
  current_solicitud: IObjCreaSolicitud;
  funcionarios: IObjFuncionarioResponsable[];
  current_funcionario: IObjFuncionarioResponsable;
  unidades: IObjUnidadOrganizacional[];
  current_unidad: IObjUnidadOrganizacional;
}

export interface IObjChange {
  id_cambio_de_etapa: number | null;
  id_bien: number | null;
  id_vivero: number | null;
  agno_lote: number | null;
  nro_lote: number | null;
  cod_etapa_lote_origen: string | null;
  fecha_cambio: string | null;
  cantidad_disponible_al_crear: number | null;
  cantidad_movida: number | null;
  altura_lote_en_cms: number | null;
  observaciones: string | null;
  id_persona_cambia: string | number | null;
  ruta_archivo_soporte: string | null;
  codigo_bien?: string | null;
  nombre_bien?: string | null;
}

export interface IObjVegetalMaterial {
  id_inventario_vivero?: number | null;
  id_bien: number | null;
  codigo_bien: string | null;
  nombre: string;
  agno_lote: number | null;
  nro_lote: number | null;
  cod_etapa_lote: string | null;
  etapa_lote: string | null;
  cantidad_disponible: number | null;
}

export interface IObjNursery {
  id_vivero: number | null;
  nombre: string;
  cod_municipio: string | null;
  direccion: string | null;
  area_mt2: number | null;
  area_propagacion_mt2: number | null;
  tiene_area_produccion: boolean | null;
  tiene_areas_pep_sustrato: boolean | null;
  tiene_area_embolsado: boolean | null;
  cod_tipo_vivero: string | null;
  fecha_inicio_viverista_actual: string | null;
  cod_origen_recursos_vivero: string | null;
  fecha_creacion: string | Date | null;
  en_funcionamiento: boolean | null;
  fecha_ultima_apertura: string | Date | null;
  justificacion_apertura: string | null;
  fecha_cierre_actual: string | Date | null;
  justificacion_cierre: string | null;
  vivero_en_cuarentena: boolean | null;
  fecha_inicio_cuarentena: string | Date | null;
  justificacion_cuarentena: string | null;
  ruta_archivo_creacion: string | null;
  activo: boolean | null;
  item_ya_usado: boolean | null;
  id_viverista_actual: number | null;
  id_persona_crea: number | null;
  id_persona_abre: number | null;
  id_persona_cierra: number | null;
  id_persona_cuarentena: number | null;
}

export interface IObjCreaSolicitud {
nro_solicitud : number | null;
fecha_solicitud : string| Date| null;
id_vivero_solicitado : number | null;
nro_info_tecnico : number| null;
motivo: string | null;
observaciones: string | null;
id_unidad_para_la_que_solicita: number|null;
id_funcionario_responsable: number | null;
id_unidad_org_del_responsable: number | null;
cod_municipio_destino: number | null;
nombre_predio_destino: string | null;
direccion_destino: string | null;
fecha_retiro_material: string | Date | null;
ruta_archivo_info_tecnico : string | null;
id_persona_solicita: number | null;
id_unidad_org_del_solicitante: number | null;
}

export interface IObjViveros {
id_solicitud_vivero: number | null;
solicitud_abierta: boolean | null;
fecha_cierra_solicitud: string | Date | null;
revisada_responsable: boolean | null;
estado_aprobacion_responsable: string | null;
justificacion_aprobacion_responsable: string | null;
fecha_aprobacion_responsable: string | Date | null;
gestionada_viveros: boolean | null;
id_despacho_viveros: number | null;
observacion_cierre_no_dispo_viveros : string | null;
fecha_cierre_no_dispo: string | Date | null;
revisada_coord_viveros: boolean | null;
estado_aprobacion_coord_viveros: string | null;
justificacion_aprobacion_coord_viveros: string | null;
fecha_aprobacion_coord_viv: string | Date | null;
solicitud_anulada_solicitante:boolean | null;
justificacion_anulacion_solicitante: string | null;
fecha_anulacion_solicitante: string | Date | null;
id_vivero_solicitud: number | null;
id_persona_solicita: number | null;
id_unidad_org_del_solicitante: number | null;
id_unidad_para_la_que_solicita: number | null;
id_funcionario_responsable_und_destino: number | null;
id_unidad_org_del_responsable: number | null;
id_persona_cierre_no_dispo_viveros: number | null;
id_persona_coord_viveros: number | null;
}

export interface IObjUnidadOrganizacional {
id_unidad_organizacional: number | null
nombre: string | null;
codigo: number | null;
cod_tipo_unidad: string | null;
cod_agrupacion_documental: string| null;
unidad_raiz: boolean | null;
id_organigrama: number | null;
id_nivel_organigrama: number | null;
id_unidad_org_padre: number | null;
}
export interface IObjFuncionarioResponsable {
id_persona: number | null;
// tipo_documento
cod_tipo_documento: string | null;
nombre: string | null;
precargado: boolean | null;
activo: boolean | null;
item_ya_usado: boolean | null;
// estado_civil": 
cod_estado_civil: string | null;
nombreestadocivil: string | null;
precargadoestadocivil: boolean | null;
activoestadocivil: boolean | null;
item_ya_usadoestadocivil: boolean | null;
representante_legal: string | null;
nombre_unidad_organizacional_actual: string | null;
tipo_persona: string | null;
numero_documento: number | null;
digito_verificacion: string | null;
primer_nombre: string | null;
segundo_nombre: string | null;
primer_apellido: string | null;
segundo_apellido: string | null;
nombre_comercial: string | null;
razon_social: string | null;
pais_residencia: string | null;
municipio_residencia: string | null;
direccion_residencia: string | null;
direccion_residencia_ref: string | null;
ubicacion_georeferenciada: string | null;
direccion_laboral: string | null;
direccion_notificaciones: string | null;
pais_nacimiento: string | null;
fecha_nacimiento: string |Date | null;
sexo: string | null;
fecha_asignacion_unidad: string | Date | null;
es_unidad_organizacional_actual: string | null;
email: string | null;
email_empresarial: string | null;
telefono_fijo_residencial: number | null;
telefono_celular: string | null;
telefono_empresa: string | null;
cod_municipio_laboral_nal: string | null;
cod_municipio_notificacion_nal: string | null;
telefono_celular_empresa: string | null;
telefono_empresa_2: string | null;
cod_pais_nacionalidad_empresa: number | null;
acepta_notificacion_sms:boolean | null;
acepta_notificacion_email:boolean | null;
acepta_tratamiento_datos:boolean | null;
id_cargo: number | null;
id_unidad_organizacional_actual: number | null;
}

export interface IObjFuncionarioSolicitudes {
  id_solicitud_vivero: number | null;
  nro_solicitud: number | null;
  fecha_solicitud: string | Date  | null;
  id_persona_solicita: number | null,
  primer_nombre_persona_solicita: string | null;
  primer_apellido_persona_solicita: string | null;
  id_unidad_para_la_que_solicita: number | null;
  nombre_unidad_para_la_que_solicita: string | null;
}


export interface IObjSolicitudDetalle {
  id_solicitud_vivero:number | null;
  nro_solicitud:number | null;
  fecha_solicitud: string | Date  | null;
  motivo: string | null;
  observaciones: string | null;
  con_municipio_destino: string | null;
  direccion_destino: string | null;
  nombre_predio_destino: string | null;
  fecha_retiro_material: string | Date  | null;
  nro_info_tecnico:number | null;
  ruta_archivo_info_tecnico: string | null;
  solicitud_abierta: boolean | null;
  fecha_cierra_solicitud: string | Date  | null;
  revisada_responsable: boolean | null;
  estado_aprobacion_responsable: string | null;
  justificacion_aprobacion_responsable: string | null;
  fecha_aprobacion_responsable: string | Date  | null;
  gestionada_viveros: boolean | null;
  id_despacho_viveros:number | null;
  observacion_cierre_no_dispo_viveros: string | null;
  fecha_cierre_no_dispo: string | Date  | null;
  revisada_coord_viveros: boolean | null;
  estado_aprobacion_coord_viveros: string | null;
  justificacion_aprobacion_coord_viveros: string | null;
  fecha_aprobacion_coord_viv: string | Date  | null;
  solicitud_anulada_solicitante: boolean | null;
  justificacion_anulacion_solicitante: string | null;
  fecha_anulacion_solicitante: string | Date  | null;
  id_vivero_solicitud:number | null;
  id_persona_solicita:number | null;
  id_unidad_org_del_solicitante:number | null;
  id_unidad_para_la_que_solicita:number | null;
  id_funcionario_responsable_und_destino:number | null;
  id_unidad_org_del_responsable:number | null;
  id_persona_cierre_no_dispo_viveros:number | null;
  id_persona_coord_viveros:number | null;
}

export interface IObjItemSolicitud {
  id_item_solicitud_viveros: number | null;
  id_solicitud_viveros: number | null;
  nro_posicion: number | null;
  id_bien: number | null;
  cod_tipo_elemento_vivero: string | null;
  codigo_bien: string | null;
  nombre_bien: string | null;
  cantidad: number | null;
  observaciones: string | null;
}

export interface IObjEstadoAprobacion {
  estado_aprobacion_responsable: string | null;
  justificacion_aprobacion_responsable: string | null;
  fecha_aprobacion_responsable: string | Date  | null;
  revisada_responsable: boolean | null;
  solicitud_abierta: boolean | null;
  fecha_cierra_solicitud: string | Date | null;
}
export interface IObjCoordinadorSolicitudes {
  id_solicitud_vivero: number | null;
  nro_solicitud: number | null;
  fecha_solicitud: string | Date  | null;
  id_persona_solicita: number | null,
  primer_nombre_persona_solicita: string | null;
  primer_apellido_persona_solicita: string | null;
  id_unidad_para_la_que_solicita: number | null;
  nombre_unidad_para_la_que_solicita: string | null;
}

export interface IObjSolicitudCoordinador {
  id_item_solicitud_viveros: number | null;
  id_solicitud_viveros: number | null;
  nro_posicion: number | null;
  id_bien: number | null;
  cod_tipo_elemento_vivero: string | null;
  codigo_bien: string | null;
  nombre_bien: string | null;
  cantidad: number | null;
  observaciones: string | null;
}

export interface IObjGestionarSolicitudFCoordinador {
  estado_aprobacion_responsable: string | null;
  justificacion_aprobacion_responsable: string | null;
  fecha_aprobacion_responsable: string | Date  | null;
  revisada_responsable: boolean | null;
  solicitud_abierta: boolean | null;
  fecha_cierra_solicitud: string | Date | null;
}