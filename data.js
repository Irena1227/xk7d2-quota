window.DASH_DATA = {
  "updatedAt": "2026-10-30T08:06:05+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 3.65,
    "feelsLikeC": 1.6,
    "humidity": 97,
    "windKph": 5.54,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-30T04:48:41+08:00",
    "fetchedAt": "2026-10-30T08:06:05+08:00",
    "error": null,
    "checkedAt": "2026-10-30T08:06:05+08:00",
    "lastSuccessAt": "2026-10-30T08:06:05+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.5,
      "currency": "CNY",
      "detail": "余额 ¥10.50",
      "fetchedAt": "2026-10-30T08:03:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-30T08:06:05+08:00",
      "lastSuccessAt": "2026-10-30T08:04:01+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-30T08:06:05+08:00"
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 16,
          "resetAt": "2026-10-30T09:40:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-30T08:06:05+08:00",
          "lastSuccessAt": "2026-10-30T08:04:01+08:00"
        },
        {
          "name": "7天",
          "usedPct": 3,
          "resetAt": "2026-11-05T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-30T08:06:05+08:00",
          "lastSuccessAt": "2026-10-30T08:04:01+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-30T08:06:05+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-10-30T08:03:00+08:00",
      "error": "ECONNRESET",
      "checkedAt": "2026-10-30T08:06:05+08:00",
      "lastSuccessAt": "2026-10-30T08:04:01+08:00",
      "stale": true,
      "partialStale": true,
      "lastAttemptAt": "2026-10-30T08:06:05+08:00"
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
          "checkedAt": "2026-10-30T08:06:05+08:00",
          "lastSuccessAt": "2026-10-30T08:04:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 3,
          "resetAt": "2026-11-04T14:53:02+08:00",
          "stale": true,
          "checkedAt": "2026-10-30T08:06:05+08:00",
          "lastSuccessAt": "2026-10-30T08:04:01+08:00"
        }
      ],
      "fetchedAt": "2026-10-30T08:03:00+08:00",
      "error": "failed to fetch codex rate limits: error sending request for url (https://chatgpt.com/backend-api/wham/usage)",
      "checkedAt": "2026-10-30T08:06:05+08:00",
      "lastSuccessAt": "2026-10-30T08:04:01+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-30T08:06:05+08:00"
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-10-30T13:02:02+08:00",
          "stale": true,
          "checkedAt": "2026-10-30T08:06:05+08:00",
          "lastSuccessAt": "2026-10-30T08:04:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 60,
          "resetAt": "2026-10-30T13:02:02+08:00",
          "stale": true,
          "checkedAt": "2026-10-30T08:06:05+08:00",
          "lastSuccessAt": "2026-10-30T08:04:01+08:00"
        },
        {
          "name": "月",
          "usedPct": 16,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-10-30T08:00:04+08:00",
          "stale": true,
          "healthCode": null,
          "healthMessage": null,
          "checkedAt": "2026-10-30T08:06:05+08:00",
          "lastSuccessAt": "2026-10-30T08:00:04+08:00"
        }
      ],
      "fetchedAt": "2026-10-30T08:03:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-30T08:06:05+08:00",
      "lastSuccessAt": "2026-10-30T08:04:01+08:00",
      "stale": true,
      "quotaWatch": {
        "status": "normal",
        "code": null,
        "target": "月",
        "message": null,
        "firstSeenAt": null,
        "checkedAt": "2026-10-30T08:04:01+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-30T08:00:04+08:00",
        "monthlyValue": 16,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "normal",
        "lastNotifiedAt": "2026-10-24T08:03:04+08:00",
        "lastNotificationAttemptAt": "2026-10-24T08:03:04+08:00",
        "notificationError": null
      },
      "lastAttemptAt": "2026-10-30T08:06:05+08:00"
    }
  },
  "quote": {
    "text": "开轩面场圃，把酒话桑麻。待到重阳日，还来就菊花。",
    "source": "孟浩然《过故人庄》"
  }
};
