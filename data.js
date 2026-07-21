window.DASH_DATA = {
  "updatedAt": "2026-07-21T23:45:05.566+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 26,
    "feelsLikeC": 29,
    "humidity": 92,
    "windKph": 6,
    "windDir": "东南风",
    "place": "北京",
    "observedAt": "2026-07-21T21:39:36.890+08:00",
    "fetchedAt": "2026-07-21T23:45:05.566+08:00",
    "error": null
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 26.58,
      "currency": "CNY",
      "detail": "余额 ¥26.58",
      "fetchedAt": "2026-07-21T23:45:00.316+08:00",
      "error": null
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 33,
          "resetAt": "2026-07-21T23:40:00.327+08:00"
        },
        {
          "name": "7天",
          "usedPct": 70,
          "resetAt": "2026-07-23T20:00:00.327+08:00"
        }
      ],
      "fetchedAt": "2026-07-21T23:39:00.374+08:00",
      "error": "fetch failed",
      "stale": true,
      "lastAttemptAt": "2026-07-21T23:45:00.366+08:00"
    },
    "codex": {
      "ok": true,
      "label": "Codex",
      "windows": [
        {
          "name": "周",
          "usedPct": 6,
          "resetAt": "2026-07-28T16:13:56.000+08:00"
        }
      ],
      "fetchedAt": "2026-07-21T23:39:00.376+08:00",
      "error": "failed to fetch codex rate limits: error sending request for url (https://chatgpt.com/backend-api/wham/usage)",
      "stale": true,
      "lastAttemptAt": "2026-07-21T23:45:00.368+08:00"
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 2,
          "resetAt": "2026-07-22T03:02:02.691+08:00"
        },
        {
          "name": "周",
          "usedPct": 72,
          "resetAt": "2026-07-24T13:02:02.691+08:00"
        },
        {
          "name": "月",
          "usedPct": 27.7,
          "resetAt": "2026-08-16T00:00:00.000+08:00",
          "observedAt": "2026-07-21T08:00:04.607+08:00"
        }
      ],
      "fetchedAt": "2026-07-21T23:45:00.379+08:00",
      "error": null
    }
  },
  "quote": {
    "text": "人生天地之间，若白驹之过隙，忽然而已。",
    "source": "庄子 ·《知北游》"
  }
};
