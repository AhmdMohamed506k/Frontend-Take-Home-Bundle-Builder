import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.RedisURL || "redis://127.0.0.1:6379" });

redisClient.on('error', (err) => console.log('Redis Client Error', err));


(async () => {
    try {
        await redisClient.connect();
        console.log('✅ Connected to Redis successfully');
    } catch (error) {
        console.error('❌ Could not connect to Redis', error);
    }
})();

export default redisClient;