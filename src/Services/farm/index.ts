import { Image } from 'react-native';
import { API } from "../base";

export interface Farm {
    id: string;
    name: string;
    model: string;
    timeOn: string;
}
 export interface updateFarmRequest {
    id: string;
    model: string;
 } 
// export interface Farm {
//     id: number;
//     name: string;
//     model: string;
//     timeOn: string;
// }

export interface addFarmRequest {
    name: string;
    address: string;
    description: string;
    image: string;
    cultivarId: string;
    modelID: string;
    userId: string;
    modelId: string;
}

const farmApi = API.injectEndpoints({
    endpoints: (build) => ({
        getFarmList: build.query<Farm[], void>(
            {
                query: () => 'farms',
            }
        ),
        getFarm: build.query({
            query: (id) => `farm/${id}/`,
        }),
        createFarm: build.mutation({
            query: (body) => ({
                url: 'farms',
                method: 'POST',
                body,
            }),
        }),
        deleteFarm: build.mutation({
            query: (id) => ({
                url: `farm/${id}`,
                method: 'DELETE',
            }),
        }),

        updateFarm: build.mutation({
            query: ({id, model}) => ({
                url: `farms/${id}`,
                method: 'PATCH',
                body: {model },
            }),
        }),
        
    }),
    overrideExisting: true,
});


export const { useGetFarmListQuery,useLazyGetFarmListQuery, useLazyGetFarmQuery, useUpdateFarmMutation, useCreateFarmMutation, useDeleteFarmMutation } = farmApi;