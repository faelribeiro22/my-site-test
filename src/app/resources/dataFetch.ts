import { BuildingDTO } from "@/dtos/BuildingDTO";
import { api } from "@/services/api";

export async function loadBuildings(currentPage: number): Promise<{ buildings: BuildingDTO[], total: number, totalPages: number }> {
    try {
      const { data } = await api.get("/buildings", {
        params: {
          results_per_page: 12,
          page: currentPage,
        },
      });
      console.log(data);
      return {
        buildings: data.buildings,
        total: data.total,
        totalPages: data.total_pages,
      }
    } catch (error) {
      console.error(error);
    return {
      buildings: [],
      total: 0,
      totalPages: 0,
    };
  }}