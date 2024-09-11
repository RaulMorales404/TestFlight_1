import { format } from "date-fns";
import { es } from "date-fns/locale";

export const useFormatDate= () => {

    const formattedDate = (isoDate: string | number | Date) => {
        return format(new Date(isoDate), "d 'de' MMMM 'de' yyyy, HH:mm", {
          locale: es,
        });
      };

      return {
        formattedDate
      }
}