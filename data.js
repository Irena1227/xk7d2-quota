window.DASH_DATA = {
  "updatedAt": "2026-09-15T14:06:10+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 26,
    "feelsLikeC": 30,
    "humidity": 53,
    "windKph": 12,
    "windDir": "东南风",
    "place": "北京",
    "observedAt": "2026-09-15T13:48:15+08:00",
    "fetchedAt": "2026-09-15T14:06:10+08:00",
    "error": null,
    "checkedAt": "2026-09-15T14:06:10+08:00",
    "lastSuccessAt": "2026-09-15T14:06:10+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 11.28,
      "currency": "CNY",
      "detail": "余额 ¥11.28",
      "fetchedAt": "2026-09-15T14:06:00+08:00",
      "error": null,
      "checkedAt": "2026-09-15T14:06:10+08:00",
      "lastSuccessAt": "2026-09-15T14:06:10+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 2,
          "resetAt": "2026-09-15T15:40:00+08:00",
          "stale": true,
          "checkedAt": "2026-09-15T14:06:10+08:00",
          "lastSuccessAt": "2026-09-15T11:18:02+08:00"
        },
        {
          "name": "7天",
          "usedPct": 44,
          "resetAt": "2026-09-17T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-09-15T14:06:10+08:00",
          "lastSuccessAt": "2026-09-15T11:18:02+08:00"
        }
      ],
      "fetchedAt": "2026-09-15T11:18:00+08:00",
      "error": "Claude 登录凭证中没有 accessToken",
      "checkedAt": "2026-09-15T14:06:10+08:00",
      "lastSuccessAt": "2026-09-15T11:18:02+08:00",
      "stale": true,
      "lastAttemptAt": "2026-09-15T14:06:10+08:00"
    },
    "codex": {
      "ok": true,
      "label": "Codex",
      "windows": [
        {
          "name": "周",
          "usedPct": 52,
          "resetAt": "2026-09-21T00:58:51+08:00",
          "stale": true,
          "checkedAt": "2026-09-15T14:06:10+08:00",
          "lastSuccessAt": "2026-09-15T13:39:03+08:00"
        },
        {
          "name": "30天",
          "usedPct": 0,
          "resetAt": "2026-09-12T02:18:01+08:00",
          "stale": true,
          "checkedAt": "2026-09-15T14:06:10+08:00",
          "lastSuccessAt": "2026-08-13T02:18:01+08:00"
        }
      ],
      "fetchedAt": "2026-09-15T13:39:00+08:00",
      "error": "failed to fetch codex rate limits: error sending request for url (https://chatgpt.com/backend-api/wham/usage)",
      "checkedAt": "2026-09-15T14:06:10+08:00",
      "lastSuccessAt": "2026-09-15T13:39:03+08:00",
      "stale": true,
      "partialStale": true,
      "lastAttemptAt": "2026-09-15T14:06:10+08:00"
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 5,
          "resetAt": "2026-09-15T18:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-09-15T14:06:10+08:00",
          "lastSuccessAt": "2026-09-15T14:06:10+08:00"
        },
        {
          "name": "周",
          "usedPct": 1,
          "resetAt": "2026-09-18T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-09-15T14:06:10+08:00",
          "lastSuccessAt": "2026-09-15T14:06:10+08:00"
        },
        {
          "name": "月",
          "usedPct": 80.4,
          "resetAt": "2026-09-15T00:00:00+08:00",
          "observedAt": "2026-09-15T08:00:05+08:00",
          "stale": false,
          "healthCode": null,
          "healthMessage": null,
          "checkedAt": "2026-09-15T14:06:10+08:00",
          "lastSuccessAt": "2026-09-15T08:00:05+08:00",
          "detailText": "⚠ 月额度已过重置时间，但数据没有更新"
        }
      ],
      "fetchedAt": "2026-09-15T14:06:02+08:00",
      "error": null,
      "checkedAt": "2026-09-15T14:06:10+08:00",
      "lastSuccessAt": "2026-09-15T14:06:10+08:00",
      "stale": false,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_reset_missed",
        "target": "月",
        "message": "月额度已过重置时间，但数据没有更新",
        "firstSeenAt": "2026-09-15T00:00:03+08:00",
        "checkedAt": "2026-09-15T14:06:10+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-09-15T08:00:05+08:00",
        "monthlyValue": 80.4,
        "monthlyResetAt": "2026-09-15T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-09-15T00:00:03+08:00",
        "lastNotificationAttemptAt": "2026-09-15T00:00:03+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "但愿人长久，千里共婵娟。",
    "source": "苏轼《水调歌头·明月几时有》"
  }
};
