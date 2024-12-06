import {
  getDistrictList,
  getDivisionList,
  getThanaList,
} from "@/actions/commonActions";
import { useQuery } from "@tanstack/react-query";
import { DefaultOptionType } from "antd/es/select";

interface Props {
  selectedDivision: string;
  selectedDistrict: string;
}

export default function useLocations({
  selectedDivision,
  selectedDistrict,
}: Props) {
  const { data: divisions, isLoading: isLoadingDivision } = useQuery({
    queryKey: ["division"],
    queryFn: getDivisionList,
  });

  const { data: districts, isLoading: isLoadingDistricts } = useQuery({
    queryKey: ["districts", selectedDivision],
    queryFn: () => getDistrictList(selectedDivision),
    enabled: !!selectedDivision,
  });

  const { data: thanaList, isLoading: isLoadingThanaList } = useQuery({
    queryKey: ["thana", selectedDistrict],
    queryFn: () => getThanaList(selectedDistrict),
    enabled: !!selectedDistrict,
  });

  const divisionOptions: DefaultOptionType[] =
    divisions?.map((el) => ({
      label: el.name,
      value: el.id,
    })) ?? [];
  const districtOptions: DefaultOptionType[] =
    districts?.map((el) => ({
      label: el.name,
      value: el.id,
    })) ?? [];
  const thanaOptions: DefaultOptionType[] =
    thanaList?.map((el) => ({
      label: el.name,
      value: el.id,
    })) ?? [];

  return {
    divisionOptions,
    districtOptions,
    thanaOptions,
    isLoadingDivision,
    isLoadingDistricts,
    isLoadingThanaList,
  };
}
