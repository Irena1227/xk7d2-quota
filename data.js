window.DASH_DATA = {
  "updatedAt": "2026-11-05T19:15:05+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 13.65,
    "feelsLikeC": 10.3,
    "humidity": 20,
    "windKph": 9.82,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-05T17:37:35+08:00",
    "fetchedAt": "2026-11-05T19:15:05+08:00",
    "error": null,
    "checkedAt": "2026-11-05T19:15:05+08:00",
    "lastSuccessAt": "2026-11-05T19:15:05+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 5.04,
      "currency": "CNY",
      "detail": "余额 ¥5.04",
      "fetchedAt": "2026-11-05T19:06:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-11-05T19:15:05+08:00",
      "lastSuccessAt": "2026-11-05T19:07:00+08:00",
      "stale": true,
      "lastAttemptAt": "2026-11-05T19:15:05+08:00"
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 25,
          "resetAt": "2026-11-05T22:30:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-05T19:15:05+08:00",
          "lastSuccessAt": "2026-11-05T19:07:00+08:00"
        },
        {
          "name": "7天",
          "usedPct": 93,
          "resetAt": "2026-11-05T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-05T19:15:05+08:00",
          "lastSuccessAt": "2026-11-05T19:07:00+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-05T19:15:05+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-11-05T19:06:00+08:00",
      "error": "ECONNRESET",
      "checkedAt": "2026-11-05T19:15:05+08:00",
      "lastSuccessAt": "2026-11-05T19:07:00+08:00",
      "stale": true,
      "partialStale": true,
      "lastAttemptAt": "2026-11-05T19:15:05+08:00"
    },
    "codex": {
      "ok": true,
      "label": "Codex",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": null,
          "detailText": "↻ -",
          "stale": true,
          "checkedAt": "2026-11-05T19:15:05+08:00",
          "lastSuccessAt": "2026-11-05T19:07:00+08:00"
        },
        {
          "name": "周",
          "usedPct": 10,
          "resetAt": "2026-11-11T15:16:03+08:00",
          "stale": true,
          "checkedAt": "2026-11-05T19:15:05+08:00",
          "lastSuccessAt": "2026-11-05T19:07:00+08:00"
        }
      ],
      "fetchedAt": "2026-11-05T19:06:00+08:00",
      "error": "failed to fetch codex rate limits: error sending request for url (https://chatgpt.com/backend-api/wham/usage)",
      "checkedAt": "2026-11-05T19:15:05+08:00",
      "lastSuccessAt": "2026-11-05T19:07:00+08:00",
      "stale": true,
      "lastAttemptAt": "2026-11-05T19:15:05+08:00"
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-11-06T00:02:02+08:00",
          "stale": true,
          "checkedAt": "2026-11-05T19:15:05+08:00",
          "lastSuccessAt": "2026-11-05T19:07:00+08:00"
        },
        {
          "name": "周",
          "usedPct": 36,
          "resetAt": "2026-11-06T13:02:02+08:00",
          "stale": true,
          "checkedAt": "2026-11-05T19:15:05+08:00",
          "lastSuccessAt": "2026-11-05T19:07:00+08:00"
        },
        {
          "name": "月",
          "usedPct": 23.2,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-11-05T08:06:06+08:00",
          "stale": true,
          "healthCode": null,
          "healthMessage": null,
          "checkedAt": "2026-11-05T19:15:05+08:00",
          "lastSuccessAt": "2026-11-05T08:06:06+08:00"
        }
      ],
      "fetchedAt": "2026-11-05T19:06:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-11-05T19:15:05+08:00",
      "lastSuccessAt": "2026-11-05T19:07:00+08:00",
      "stale": true,
      "quotaWatch": {
        "status": "normal",
        "code": null,
        "target": "月",
        "message": null,
        "firstSeenAt": null,
        "checkedAt": "2026-11-05T19:07:00+08:00",
        "weeklyIncreasePct": 3,
        "fiveHourIncreasePct": 14,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-11-05T08:06:06+08:00",
        "monthlyValue": 23.2,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "normal",
        "lastNotifiedAt": "2026-11-05T08:06:06+08:00",
        "lastNotificationAttemptAt": "2026-11-05T08:06:06+08:00",
        "notificationError": null
      },
      "lastAttemptAt": "2026-11-05T19:15:05+08:00"
    }
  },
  "quote": {
    "text": "外师造化，中得心源。",
    "source": "张璪语，见张彦远《历代名画记》"
  }
};
