window.DASH_DATA = {
  "updatedAt": "2026-10-15T04:15:03+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 10.95,
    "feelsLikeC": 10.6,
    "humidity": 99,
    "windKph": 14.256,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-15T02:03:30+08:00",
    "fetchedAt": "2026-10-15T04:15:03+08:00",
    "error": null,
    "checkedAt": "2026-10-15T04:15:03+08:00",
    "lastSuccessAt": "2026-10-15T04:15:03+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.52,
      "currency": "CNY",
      "detail": "余额 ¥10.52",
      "fetchedAt": "2026-10-15T04:15:00+08:00",
      "error": null,
      "checkedAt": "2026-10-15T04:15:03+08:00",
      "lastSuccessAt": "2026-10-15T04:15:03+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 21,
          "resetAt": "2026-10-14T13:39:59+08:00",
          "stale": true,
          "checkedAt": "2026-10-15T04:15:03+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        },
        {
          "name": "7天",
          "usedPct": 27,
          "resetAt": "2026-10-15T19:59:59+08:00",
          "stale": true,
          "checkedAt": "2026-10-15T04:15:03+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-15T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-15T04:15:03+08:00",
          "lastSuccessAt": "2026-10-14T11:15:02+08:00"
        }
      ],
      "fetchedAt": "2026-10-14T11:15:00+08:00",
      "error": "fetch failed",
      "checkedAt": "2026-10-15T04:15:03+08:00",
      "lastSuccessAt": "2026-10-14T11:15:02+08:00",
      "stale": true,
      "lastAttemptAt": "2026-10-15T04:15:03+08:00"
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
          "checkedAt": "2026-10-15T04:15:03+08:00",
          "lastSuccessAt": "2026-10-15T04:15:03+08:00"
        },
        {
          "name": "周",
          "usedPct": 35,
          "resetAt": "2026-10-20T12:58:38+08:00",
          "stale": false,
          "checkedAt": "2026-10-15T04:15:03+08:00",
          "lastSuccessAt": "2026-10-15T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-10-15T04:15:00+08:00",
      "error": null,
      "checkedAt": "2026-10-15T04:15:03+08:00",
      "lastSuccessAt": "2026-10-15T04:15:03+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-10-15T08:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-15T04:15:03+08:00",
          "lastSuccessAt": "2026-10-15T04:15:03+08:00"
        },
        {
          "name": "周",
          "usedPct": 48,
          "resetAt": "2026-10-16T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-15T04:15:03+08:00",
          "lastSuccessAt": "2026-10-15T04:15:03+08:00"
        },
        {
          "name": "月",
          "usedPct": 76,
          "resetAt": "2026-10-15T00:00:00+08:00",
          "observedAt": "2026-10-14T08:00:05+08:00",
          "stale": false,
          "healthCode": null,
          "healthMessage": null,
          "checkedAt": "2026-10-15T04:15:03+08:00",
          "lastSuccessAt": "2026-10-14T08:00:05+08:00",
          "detailText": "⚠ 月额度已过重置时间，但数据没有更新"
        }
      ],
      "fetchedAt": "2026-10-15T04:15:00+08:00",
      "error": null,
      "checkedAt": "2026-10-15T04:15:03+08:00",
      "lastSuccessAt": "2026-10-15T04:15:03+08:00",
      "stale": false,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_reset_missed",
        "target": "月",
        "message": "月额度已过重置时间，但数据没有更新",
        "firstSeenAt": "2026-10-15T00:00:02+08:00",
        "checkedAt": "2026-10-15T04:15:03+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-14T08:00:05+08:00",
        "monthlyValue": 76,
        "monthlyResetAt": "2026-10-15T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-10-15T00:00:02+08:00",
        "lastNotificationAttemptAt": "2026-10-15T00:00:02+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "我有一瓢酒，可以慰风尘。",
    "source": "韦应物《简卢陟》"
  }
};
