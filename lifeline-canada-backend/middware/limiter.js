import ratelimit from "express-rate-limit"
export const signLimiter=ratelimit({
    windowMs: 15*60*1000, // 15 minutes
    max:5,
    message:{
        ok:false,
        error:"To many attempts so try it after 15 minutes"
    }

})