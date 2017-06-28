
import { YouTubeSearchService } from './youtube-search.service';

export const YOUTUBE_API_KEY = 'XXX_YOUR_KEY_HERE_XXX';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const youTubeSearchInjectables: Array<any> = [
  {
    provide: YouTubeSearchService,
    useClass: YouTubeSearchService
  },
];
