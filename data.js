window.DASH_DATA = {
  "updatedAt": "2026-08-16T20:06:01+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 26,
    "feelsLikeC": 27,
    "humidity": 63,
    "windKph": 11,
    "windDir": "北风",
    "place": "北京",
    "observedAt": "2026-08-16T19:11:38+08:00",
    "fetchedAt": "2026-08-16T20:06:01+08:00",
    "error": null,
    "checkedAt": "2026-08-16T20:06:01+08:00",
    "lastSuccessAt": "2026-08-16T20:06:01+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 21.23,
      "currency": "CNY",
      "detail": "余额 ¥21.23",
      "fetchedAt": "2026-08-16T20:06:00+08:00",
      "error": null,
      "checkedAt": "2026-08-16T20:06:01+08:00",
      "lastSuccessAt": "2026-08-16T20:06:01+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-08-17T00:10:00+08:00",
          "stale": true,
          "checkedAt": "2026-08-16T20:06:01+08:00",
          "lastSuccessAt": "2026-08-16T19:27:02+08:00"
        },
        {
          "name": "7天",
          "usedPct": 17,
          "resetAt": "2026-08-20T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-08-16T20:06:01+08:00",
          "lastSuccessAt": "2026-08-16T19:27:02+08:00"
        }
      ],
      "fetchedAt": "2026-08-16T19:27:00+08:00",
      "error": "HTTP 429：Rate limited. Please try again later.",
      "checkedAt": "2026-08-16T20:06:01+08:00",
      "lastSuccessAt": "2026-08-16T19:27:02+08:00",
      "stale": true,
      "lastAttemptAt": "2026-08-16T20:06:01+08:00"
    },
    "codex": {
      "ok": true,
      "label": "Codex",
      "windows": [
        {
          "name": "周",
          "usedPct": 43,
          "resetAt": "2026-08-20T11:49:22+08:00",
          "stale": false,
          "checkedAt": "2026-08-16T20:06:01+08:00",
          "lastSuccessAt": "2026-08-16T20:06:01+08:00"
        },
        {
          "name": "30天",
          "usedPct": 0,
          "resetAt": "2026-09-12T02:18:01+08:00",
          "stale": true,
          "checkedAt": "2026-08-16T20:06:01+08:00",
          "lastSuccessAt": "2026-08-13T02:18:01+08:00"
        }
      ],
      "fetchedAt": "2026-08-16T20:06:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-08-16T20:06:01+08:00",
      "lastSuccessAt": "2026-08-16T20:06:01+08:00",
      "stale": false,
      "partialStale": true
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-08-16T23:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-08-16T20:06:01+08:00",
          "lastSuccessAt": "2026-08-16T20:06:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 0,
          "resetAt": "2026-08-21T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-08-16T20:06:01+08:00",
          "lastSuccessAt": "2026-08-16T20:06:01+08:00"
        },
        {
          "name": "月",
          "usedPct": 100,
          "resetAt": "2026-08-16T00:00:00+08:00",
          "observedAt": "2026-08-16T00:12:59+08:00",
          "stale": false,
          "healthCode": null,
          "healthMessage": null,
          "checkedAt": "2026-08-16T20:06:01+08:00",
          "lastSuccessAt": "2026-08-16T00:12:59+08:00",
          "detailText": "⚠ 月额度已过重置时间，但数据没有更新"
        }
      ],
      "fetchedAt": "2026-08-16T20:06:00+08:00",
      "error": null,
      "checkedAt": "2026-08-16T20:06:01+08:00",
      "lastSuccessAt": "2026-08-16T20:06:01+08:00",
      "stale": false,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_reset_missed",
        "target": "月",
        "message": "月额度已过重置时间，但数据没有更新",
        "firstSeenAt": "2026-08-16T00:00:04+08:00",
        "checkedAt": "2026-08-16T20:06:01+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-08-16T00:12:59+08:00",
        "monthlyValue": 100,
        "monthlyResetAt": "2026-08-16T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-08-16T00:00:04+08:00",
        "lastNotificationAttemptAt": "2026-08-16T00:00:04+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "此中有真意，欲辨已忘言。",
    "source": "陶渊明《饮酒·其五》"
  }
};
