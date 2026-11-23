window.DASH_DATA = {
  "updatedAt": "2026-11-23T19:15:08+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 4.05,
    "feelsLikeC": -1.2,
    "humidity": 18,
    "windKph": 16.77,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-23T18:37:50+08:00",
    "fetchedAt": "2026-11-23T19:15:08+08:00",
    "error": null,
    "checkedAt": "2026-11-23T19:15:08+08:00",
    "lastSuccessAt": "2026-11-23T19:15:08+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 3.68,
      "currency": "CNY",
      "detail": "余额 ¥3.68",
      "fetchedAt": "2026-11-23T19:15:00+08:00",
      "error": null,
      "checkedAt": "2026-11-23T19:15:08+08:00",
      "lastSuccessAt": "2026-11-23T19:15:08+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 12,
          "resetAt": "2026-11-23T22:49:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-23T19:15:08+08:00",
          "lastSuccessAt": "2026-11-23T19:15:08+08:00"
        },
        {
          "name": "7天",
          "usedPct": 57,
          "resetAt": "2026-11-26T19:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-23T19:15:08+08:00",
          "lastSuccessAt": "2026-11-23T19:15:08+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-11-19T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-23T19:15:08+08:00",
          "lastSuccessAt": "2026-11-17T16:00:04+08:00"
        }
      ],
      "fetchedAt": "2026-11-23T19:15:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-23T19:15:08+08:00",
      "lastSuccessAt": "2026-11-23T19:15:08+08:00",
      "stale": false,
      "partialStale": true
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
          "stale": false,
          "checkedAt": "2026-11-23T19:15:08+08:00",
          "lastSuccessAt": "2026-11-23T19:15:08+08:00"
        },
        {
          "name": "周",
          "usedPct": 58,
          "resetAt": "2026-11-25T15:22:00+08:00",
          "stale": false,
          "checkedAt": "2026-11-23T19:15:08+08:00",
          "lastSuccessAt": "2026-11-23T19:15:08+08:00"
        }
      ],
      "fetchedAt": "2026-11-23T19:15:00+08:00",
      "error": null,
      "checkedAt": "2026-11-23T19:15:08+08:00",
      "lastSuccessAt": "2026-11-23T19:15:08+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 4,
          "resetAt": "2026-11-23T22:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-23T19:15:08+08:00",
          "lastSuccessAt": "2026-11-23T19:15:08+08:00"
        },
        {
          "name": "周",
          "usedPct": 23,
          "resetAt": "2026-11-27T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-23T19:15:08+08:00",
          "lastSuccessAt": "2026-11-23T19:15:08+08:00"
        },
        {
          "name": "月",
          "usedPct": 6.9,
          "resetAt": "2026-12-14T00:00:00+08:00",
          "observedAt": "2026-11-18T08:06:06+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-11-23T19:15:08+08:00",
          "lastSuccessAt": "2026-11-18T08:06:06+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-11-23T19:15:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-23T19:15:08+08:00",
      "lastSuccessAt": "2026-11-23T19:15:08+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-11-19T08:00:07+08:00",
        "checkedAt": "2026-11-23T19:15:08+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-11-18T08:06:06+08:00",
        "monthlyValue": 6.9,
        "monthlyResetAt": "2026-12-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-11-19T08:00:07+08:00",
        "lastNotificationAttemptAt": "2026-11-19T08:00:07+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "四十年来画竹枝，日间挥写夜间思。冗繁削尽留清瘦，画到生时是熟时。",
    "source": "郑板桥《题画竹》"
  }
};
