import { Hono } from 'hono';
import { cors } from 'hono/cors';
import animekaiHomeRouter from './src/animekai/router/home.js';
import animekaiAnimeRouter from './src/animekai/router/anime.js';
import animekaiSearchRouter from './src/animekai/router/search.js';
import animekaiSearchAdvancedRouter from './src/animekai/router/search-advanced.js';
import animekaiSearchSuggestionRouter from './src/animekai/router/search-suggestion.js';
import animekaiProducerRouter from './src/animekai/router/producer.js';
import animekaiGenreRouter from './src/animekai/router/genre.js';
import animekaiCategoryRouter from './src/animekai/router/category.js';
import animekaiScheduleRouter from './src/animekai/router/schedule.js';
import animekaiEpisodesRouter from './src/animekai/router/episodes.js';
import animekaiNextEpisodeRouter from './src/animekai/router/next-episode.js';
import animekaiEpisodeServersRouter from './src/animekai/router/episode-servers.js';
import animekaiEpisodeSourcesRouter from './src/animekai/router/streaming-server.js';
import animekaiProxyRouter from './src/animekai/router/proxy.js';
import animekaiAzlistRouter from './src/animekai/router/azlist.js';
import { animekaiEpisodesController } from './src/animekai/controllers/episodes.js';

const app = new Hono();

app.use('*', cors());

app.get('/', (c) => c.json({ message: 'Shirayuki Scrapper API V2', version: '2.0.0' }));

app.route('/api/v2/animekai/home', animekaiHomeRouter);
app.route('/api/v2/animekai/azlist', animekaiAzlistRouter);
app.route('/api/v2/animekai/anime', animekaiAnimeRouter);
app.route('/api/v2/animekai/search/advanced', animekaiSearchAdvancedRouter);
app.route('/api/v2/animekai/search/suggestion', animekaiSearchSuggestionRouter);
app.route('/api/v2/animekai/search', animekaiSearchRouter);
app.route('/api/v2/animekai/producer', animekaiProducerRouter);
app.route('/api/v2/animekai/genre', animekaiGenreRouter);
app.route('/api/v2/animekai/category', animekaiCategoryRouter);
app.route('/api/v2/animekai/schedule', animekaiScheduleRouter);
app.route('/api/v2/animekai/anime', animekaiEpisodesRouter);
app.route('/api/v2/animekai/anime', animekaiNextEpisodeRouter);
app.route('/api/v2/animekai/episode', animekaiEpisodeServersRouter);
app.route('/api/v2/animekai/episode/sources', animekaiEpisodeSourcesRouter);
app.route('/api/v2/animekai/proxy', animekaiProxyRouter);
app.get('/api/v2/animekai/:animeId/episodes', animekaiEpisodesController);

app.notFound((c) => c.json({ success: false, message: 'Not found' }, 404));
app.onError((err, c) => c.json({ success: false, error: err.message }, 500));

export default app;
