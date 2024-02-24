export const mockData = {
  count: 5652,
  page: 1,
  totalPages: 57,
  nextPage: 2,
  previousPage: 0,
  showingFrom: 1,
  showingTo: 100,
  items: [
    {
      id: 39248,
      tipo: "Notícia",
      titulo: "Em auditório lotado, IBGE divulga resultados do Censo 2022...",
      introducao: "Evento do Censo 2022 reúne cerca de 600 pessoas...",
      data_publicacao: "23/02/2024 18:27:52",
      produto_id: 22827,
      produtos: "22827|Censo 2022#3|censo-demografico-2022|2098",
      editorias: "ibge;censo2020",
      imagens:
        '{"image_intro":"images/agenciadenoticias/ibge/2024_02/censo_fotos_HOME.jpg",...}',
      produtos_relacionados: "22827",
      destaque: true,
      link: "http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39248-em-auditorio-lotado-ibge-divulga-resultados-do-censo-2022-caracteristicas-dos-domicilios-em-diadema-sp.html",
    },
  ],
};

export const useApiDataMock = jest.fn().mockImplementation(() => ({
  data: mockData,
  isLoading: false,
  isError: false,
}));
