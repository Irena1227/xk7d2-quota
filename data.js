window.DASH_DATA = {
  "updatedAt": "2026-10-29T05:46:00+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 3.15,
    "feelsLikeC": 0.8,
    "humidity": 97,
    "windKph": 7.23,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-29T05:43:01+08:00",
    "fetchedAt": "2026-10-29T05:46:00+08:00",
    "error": null,
    "checkedAt": "2026-10-29T05:46:00+08:00",
    "lastSuccessAt": "2026-10-29T05:46:00+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.5,
      "currency": "CNY",
      "detail": "余额 ¥10.50",
      "fetchedAt": "2026-10-29T05:45:00+08:00",
      "error": null,
      "checkedAt": "2026-10-29T05:46:00+08:00",
      "lastSuccessAt": "2026-10-29T05:46:00+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 13,
          "resetAt": "2026-10-29T01:40:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-29T05:46:00+08:00",
          "lastSuccessAt": "2026-10-28T23:39:10+08:00"
        },
        {
          "name": "7天",
          "usedPct": 84,
          "resetAt": "2026-10-29T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-29T05:46:00+08:00",
          "lastSuccessAt": "2026-10-28T23:39:10+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-29T05:46:00+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-10-28T23:39:00+08:00",
      "error": "ECONNRESET",
      "checkedAt": "2026-10-29T05:46:00+08:00",
      "lastSuccessAt": "2026-10-28T23:39:10+08:00",
      "stale": true,
      "partialStale": true,
      "lastAttemptAt": "2026-10-29T05:46:00+08:00"
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
          "checkedAt": "2026-10-29T05:46:00+08:00",
          "lastSuccessAt": "2026-10-28T23:39:10+08:00"
        },
        {
          "name": "周",
          "usedPct": 1,
          "resetAt": "2026-11-04T14:53:02+08:00",
          "stale": true,
          "checkedAt": "2026-10-29T05:46:00+08:00",
          "lastSuccessAt": "2026-10-28T23:39:10+08:00"
        }
      ],
      "fetchedAt": "2026-10-28T23:39:00+08:00",
      "error": "failed to fetch codex rate limits: error sending request for url (https://chatgpt.com/backend-api/wham/usage)",
      "checkedAt": "2026-10-29T05:46:00+08:00",
      "lastSuccessAt": "2026-10-28T23:39:10+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-29T05:46:00+08:00"
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-10-29T07:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-29T05:46:00+08:00",
          "lastSuccessAt": "2026-10-29T05:46:00+08:00"
        },
        {
          "name": "周",
          "usedPct": 38,
          "resetAt": "2026-10-30T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-29T05:46:00+08:00",
          "lastSuccessAt": "2026-10-29T05:46:00+08:00"
        },
        {
          "name": "月",
          "usedPct": 9.6,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-10-28T08:00:05+08:00",
          "stale": false,
          "healthCode": null,
          "healthMessage": null,
          "checkedAt": "2026-10-29T05:46:00+08:00",
          "lastSuccessAt": "2026-10-28T08:00:05+08:00"
        }
      ],
      "fetchedAt": "2026-10-29T05:45:00+08:00",
      "error": null,
      "checkedAt": "2026-10-29T05:46:00+08:00",
      "lastSuccessAt": "2026-10-29T05:46:00+08:00",
      "stale": false,
      "quotaWatch": {
        "status": "normal",
        "code": null,
        "target": "月",
        "message": null,
        "firstSeenAt": null,
        "checkedAt": "2026-10-29T05:46:00+08:00",
        "weeklyIncreasePct": 10,
        "fiveHourIncreasePct": 50,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-28T08:00:05+08:00",
        "monthlyValue": 9.6,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "normal",
        "lastNotifiedAt": "2026-10-24T08:03:04+08:00",
        "lastNotificationAttemptAt": "2026-10-24T08:03:04+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "我见青山多妩媚，料青山见我应如是。",
    "source": "辛弃疾《贺新郎·甚矣吾衰矣》"
  }
};
