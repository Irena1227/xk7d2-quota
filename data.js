window.DASH_DATA = {
  "updatedAt": "2026-10-27T06:24:30+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 7.45,
    "feelsLikeC": 4,
    "humidity": 24,
    "windKph": 8.34,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-27T05:44:03+08:00",
    "fetchedAt": "2026-10-27T06:24:30+08:00",
    "error": null,
    "checkedAt": "2026-10-27T06:24:30+08:00",
    "lastSuccessAt": "2026-10-27T06:24:30+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.5,
      "currency": "CNY",
      "detail": "余额 ¥10.50",
      "fetchedAt": "2026-10-27T06:15:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-27T06:24:30+08:00",
      "lastSuccessAt": "2026-10-27T06:15:30+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-27T06:24:30+08:00"
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 12,
          "resetAt": "2026-10-27T07:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-27T06:24:30+08:00",
          "lastSuccessAt": "2026-10-27T06:15:30+08:00"
        },
        {
          "name": "7天",
          "usedPct": 67,
          "resetAt": "2026-10-29T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-27T06:24:30+08:00",
          "lastSuccessAt": "2026-10-27T06:15:30+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-27T06:24:30+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-10-27T06:15:00+08:00",
      "error": "ECONNRESET",
      "checkedAt": "2026-10-27T06:24:30+08:00",
      "lastSuccessAt": "2026-10-27T06:15:30+08:00",
      "stale": true,
      "partialStale": true,
      "lastAttemptAt": "2026-10-27T06:24:30+08:00"
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
          "checkedAt": "2026-10-27T06:24:30+08:00",
          "lastSuccessAt": "2026-10-27T06:15:30+08:00"
        },
        {
          "name": "周",
          "usedPct": 10,
          "resetAt": "2026-11-02T13:59:34+08:00",
          "stale": true,
          "checkedAt": "2026-10-27T06:24:30+08:00",
          "lastSuccessAt": "2026-10-27T06:15:30+08:00"
        }
      ],
      "fetchedAt": "2026-10-27T06:15:00+08:00",
      "error": "failed to fetch codex rate limits: error sending request for url (https://chatgpt.com/backend-api/wham/usage)",
      "checkedAt": "2026-10-27T06:24:30+08:00",
      "lastSuccessAt": "2026-10-27T06:15:30+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-27T06:24:30+08:00"
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-10-27T10:02:02+08:00",
          "stale": true,
          "checkedAt": "2026-10-27T06:24:30+08:00",
          "lastSuccessAt": "2026-10-27T06:15:30+08:00"
        },
        {
          "name": "周",
          "usedPct": 21,
          "resetAt": "2026-10-30T13:02:02+08:00",
          "stale": true,
          "checkedAt": "2026-10-27T06:24:30+08:00",
          "lastSuccessAt": "2026-10-27T06:15:30+08:00"
        },
        {
          "name": "月",
          "usedPct": 4.4,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-10-26T08:00:04+08:00",
          "stale": true,
          "healthCode": null,
          "healthMessage": null,
          "checkedAt": "2026-10-27T06:24:30+08:00",
          "lastSuccessAt": "2026-10-26T08:00:04+08:00"
        }
      ],
      "fetchedAt": "2026-10-27T06:15:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-27T06:24:30+08:00",
      "lastSuccessAt": "2026-10-27T06:15:30+08:00",
      "stale": true,
      "quotaWatch": {
        "status": "normal",
        "code": null,
        "target": "月",
        "message": null,
        "firstSeenAt": null,
        "checkedAt": "2026-10-27T06:15:30+08:00",
        "weeklyIncreasePct": 19,
        "fiveHourIncreasePct": 93,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-26T08:00:04+08:00",
        "monthlyValue": 4.4,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "normal",
        "lastNotifiedAt": "2026-10-24T08:03:04+08:00",
        "lastNotificationAttemptAt": "2026-10-24T08:03:04+08:00",
        "notificationError": null
      },
      "lastAttemptAt": "2026-10-27T06:24:30+08:00"
    }
  },
  "quote": {
    "text": "咬定青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风。",
    "source": "郑燮《竹石》"
  }
};
