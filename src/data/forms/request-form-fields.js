export default [
    {
        name: "service-type",
        label: "Tipo del Servicio",
        type: "service_form",
        query: {
            "type": "provider",
            "property": "services",
        }
    },
    {
        name: "notes",
        label: "Notas",
        type: "string"
    },
    {
        name: "start_date",
        label: "Fecha inicio",
        type: "date"
    },
    {
        name: "end_date",
        label: "Fecha final",
        type: "date"
    },
]