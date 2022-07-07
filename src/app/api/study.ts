import baseApi from '@/app/api/baseApi';

type CalenderContentType = {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  description: string;
};

export const studyApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ['study'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getStudyByMonth: builder.mutation<
        CalenderContentType[],
        {
          month: Date;
        }
      >({
        query: (args) => ({
          url: '',
          method: 'GET',
          body: {
            month: args.month,
          },
        }),
      }),
    }),
  });
