import { Pipe, PipeTransform } from "@angular/core";
import { Comment } from './modules/comment';
import { Database } from './database';

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): number {
    if (!items) 0;
    if (!value || value.length == 0) return 0;
    return items.filter(
      it => it[field] === value
    ).length;
  }
}