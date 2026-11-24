window.DASH_DATA = {
  "updatedAt": "2026-11-24T09:54:05+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 0.95,
    "feelsLikeC": -2.3,
    "humidity": 34,
    "windKph": 5.71,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-24T08:33:08+08:00",
    "fetchedAt": "2026-11-24T09:54:05+08:00",
    "error": null,
    "checkedAt": "2026-11-24T09:54:05+08:00",
    "lastSuccessAt": "2026-11-24T09:54:05+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 3.66,
      "currency": "CNY",
      "detail": "余额 ¥3.66",
      "fetchedAt": "2026-11-24T09:54:00+08:00",
      "error": null,
      "checkedAt": "2026-11-24T09:54:05+08:00",
      "lastSuccessAt": "2026-11-24T09:54:05+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 23,
          "resetAt": "2026-11-24T11:30:00+08:00",
          "stale": false,
          "checkedAt": "2026-11-24T09:54:05+08:00",
          "lastSuccessAt": "2026-11-24T09:54:05+08:00"
        },
        {
          "name": "7天",
          "usedPct": 61,
          "resetAt": "2026-11-26T20:00:00+08:00",
          "stale": false,
          "checkedAt": "2026-11-24T09:54:05+08:00",
          "lastSuccessAt": "2026-11-24T09:54:05+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-11-19T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-24T09:54:05+08:00",
          "lastSuccessAt": "2026-11-17T16:00:04+08:00"
        }
      ],
      "fetchedAt": "2026-11-24T09:54:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-24T09:54:05+08:00",
      "lastSuccessAt": "2026-11-24T09:54:05+08:00",
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
          "checkedAt": "2026-11-24T09:54:05+08:00",
          "lastSuccessAt": "2026-11-24T09:54:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 60,
          "resetAt": "2026-11-25T15:22:00+08:00",
          "stale": false,
          "checkedAt": "2026-11-24T09:54:05+08:00",
          "lastSuccessAt": "2026-11-24T09:54:05+08:00"
        }
      ],
      "fetchedAt": "2026-11-24T09:54:00+08:00",
      "error": null,
      "checkedAt": "2026-11-24T09:54:05+08:00",
      "lastSuccessAt": "2026-11-24T09:54:05+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 15,
          "resetAt": "2026-11-24T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-24T09:54:05+08:00",
          "lastSuccessAt": "2026-11-24T09:54:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 31,
          "resetAt": "2026-11-27T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-24T09:54:05+08:00",
          "lastSuccessAt": "2026-11-24T09:54:05+08:00"
        },
        {
          "name": "月",
          "usedPct": 6.9,
          "resetAt": "2026-12-14T00:00:00+08:00",
          "observedAt": "2026-11-18T08:06:06+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-11-24T09:54:05+08:00",
          "lastSuccessAt": "2026-11-18T08:06:06+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-11-24T09:54:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-24T09:54:05+08:00",
      "lastSuccessAt": "2026-11-24T09:54:05+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-11-19T08:00:07+08:00",
        "checkedAt": "2026-11-24T09:54:05+08:00",
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
    "text": "闲来无事不从容，睡觉东窗日已红。万物静观皆自得，四时佳兴与人同。",
    "source": "程颢《秋日偶成》"
  }
};
