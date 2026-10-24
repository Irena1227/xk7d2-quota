window.DASH_DATA = {
  "updatedAt": "2026-10-25T00:45:30+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 13.65,
    "feelsLikeC": 13.9,
    "humidity": 89,
    "windKph": 1.98,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-24T21:15:59+08:00",
    "fetchedAt": "2026-10-25T00:45:30+08:00",
    "error": null,
    "checkedAt": "2026-10-25T00:45:30+08:00",
    "lastSuccessAt": "2026-10-25T00:45:30+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.5,
      "currency": "CNY",
      "detail": "余额 ¥10.50",
      "fetchedAt": "2026-10-25T00:42:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-25T00:45:30+08:00",
      "lastSuccessAt": "2026-10-25T00:42:36+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-25T00:45:30+08:00"
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 24,
          "resetAt": "2026-10-25T04:10:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-25T00:45:30+08:00",
          "lastSuccessAt": "2026-10-25T00:42:36+08:00"
        },
        {
          "name": "7天",
          "usedPct": 43,
          "resetAt": "2026-10-29T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-25T00:45:30+08:00",
          "lastSuccessAt": "2026-10-25T00:42:36+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-25T00:45:30+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-10-25T00:42:00+08:00",
      "error": "ECONNRESET",
      "checkedAt": "2026-10-25T00:45:30+08:00",
      "lastSuccessAt": "2026-10-25T00:42:36+08:00",
      "stale": true,
      "partialStale": true,
      "lastAttemptAt": "2026-10-25T00:45:30+08:00"
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
          "checkedAt": "2026-10-25T00:45:30+08:00",
          "lastSuccessAt": "2026-10-25T00:39:08+08:00"
        },
        {
          "name": "周",
          "usedPct": 30,
          "resetAt": "2026-10-31T02:00:40+08:00",
          "stale": true,
          "checkedAt": "2026-10-25T00:45:30+08:00",
          "lastSuccessAt": "2026-10-25T00:39:08+08:00"
        }
      ],
      "fetchedAt": "2026-10-25T00:39:00+08:00",
      "error": "failed to fetch codex rate limits: error sending request for url (https://chatgpt.com/backend-api/wham/usage)",
      "checkedAt": "2026-10-25T00:45:30+08:00",
      "lastSuccessAt": "2026-10-25T00:39:08+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-25T00:45:30+08:00"
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 1,
          "resetAt": "2026-10-25T03:02:02+08:00",
          "stale": true,
          "checkedAt": "2026-10-25T00:45:30+08:00",
          "lastSuccessAt": "2026-10-25T00:42:36+08:00"
        },
        {
          "name": "周",
          "usedPct": 21,
          "resetAt": "2026-10-30T13:02:02+08:00",
          "stale": true,
          "checkedAt": "2026-10-25T00:45:30+08:00",
          "lastSuccessAt": "2026-10-25T00:42:36+08:00"
        },
        {
          "name": "月",
          "usedPct": 20.9,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-10-24T08:03:04+08:00",
          "stale": true,
          "healthCode": null,
          "healthMessage": null,
          "checkedAt": "2026-10-25T00:45:30+08:00",
          "lastSuccessAt": "2026-10-24T08:03:04+08:00"
        }
      ],
      "fetchedAt": "2026-10-25T00:42:01+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-25T00:45:30+08:00",
      "lastSuccessAt": "2026-10-25T00:42:36+08:00",
      "stale": true,
      "quotaWatch": {
        "status": "normal",
        "code": null,
        "target": "月",
        "message": null,
        "firstSeenAt": null,
        "checkedAt": "2026-10-25T00:42:36+08:00",
        "weeklyIncreasePct": 16,
        "fiveHourIncreasePct": 80,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-24T08:03:04+08:00",
        "monthlyValue": 20.9,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "normal",
        "lastNotifiedAt": "2026-10-24T08:03:04+08:00",
        "lastNotificationAttemptAt": "2026-10-24T08:03:04+08:00",
        "notificationError": null
      },
      "lastAttemptAt": "2026-10-25T00:45:30+08:00"
    }
  },
  "quote": {
    "text": "好雨知时节，当春乃发生。随风潜入夜，润物细无声。",
    "source": "杜甫《春夜喜雨》"
  }
};
