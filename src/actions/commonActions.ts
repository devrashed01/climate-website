import { commonRequest } from "@/config/axios.config";

export const getDivisionList = () =>
  commonRequest
    .get<{
      data: DivisionResponse;
    }>("division-list", {
      params: { per_page: 10 },
    })
    .then((res) => res.data.data.data);

export const getDistrictList = (division_id: string) =>
  commonRequest
    .get<{
      data: DistrictResponse;
    }>("district-list", {
      params: { division_id, per_page: 500 },
    })
    .then((res) => res.data.data.data);

export const getThanaList = (district_id: string) =>
  commonRequest
    .get<{
      data: ThanaResponse;
    }>("thana-list", {
      params: { district_id, per_page: 500 },
    })
    .then((res) => res.data.data.data);
