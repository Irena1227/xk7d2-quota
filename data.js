window.DASH_DATA = {
  "updatedAt": "2026-11-08T17:09:05+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 7.45,
    "feelsLikeC": 4.5,
    "humidity": 59,
    "windKph": 10.02,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-08T14:13:52+08:00",
    "fetchedAt": "2026-11-08T17:09:05+08:00",
    "error": null,
    "checkedAt": "2026-11-08T17:09:05+08:00",
    "lastSuccessAt": "2026-11-08T17:09:05+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 4.92,
      "currency": "CNY",
      "detail": "余额 ¥4.92",
      "fetchedAt": "2026-11-08T17:09:00+08:00",
      "error": null,
      "checkedAt": "2026-11-08T17:09:05+08:00",
      "lastSuccessAt": "2026-11-08T17:09:05+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 7,
          "resetAt": "2026-11-08T20:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-08T17:09:05+08:00",
          "lastSuccessAt": "2026-11-08T17:09:05+08:00"
        },
        {
          "name": "7天",
          "usedPct": 30,
          "resetAt": "2026-11-12T19:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-08T17:09:05+08:00",
          "lastSuccessAt": "2026-11-08T17:09:05+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-08T17:09:05+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-11-08T17:09:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-08T17:09:05+08:00",
      "lastSuccessAt": "2026-11-08T17:09:05+08:00",
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
          "checkedAt": "2026-11-08T17:09:05+08:00",
          "lastSuccessAt": "2026-11-08T17:09:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 33,
          "resetAt": "2026-11-11T15:16:03+08:00",
          "stale": false,
          "checkedAt": "2026-11-08T17:09:05+08:00",
          "lastSuccessAt": "2026-11-08T17:09:05+08:00"
        }
      ],
      "fetchedAt": "2026-11-08T17:09:00+08:00",
      "error": null,
      "checkedAt": "2026-11-08T17:09:05+08:00",
      "lastSuccessAt": "2026-11-08T17:09:05+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-11-08T22:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-08T17:09:05+08:00",
          "lastSuccessAt": "2026-11-08T17:09:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 51,
          "resetAt": "2026-11-13T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-08T17:09:05+08:00",
          "lastSuccessAt": "2026-11-08T17:09:05+08:00"
        },
        {
          "name": "月",
          "usedPct": 25.9,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-11-07T08:03:07+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-11-08T17:09:05+08:00",
          "lastSuccessAt": "2026-11-07T08:03:07+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-11-08T17:09:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-08T17:09:05+08:00",
      "lastSuccessAt": "2026-11-08T17:09:05+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-11-08T08:00:07+08:00",
        "checkedAt": "2026-11-08T17:09:05+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-11-07T08:03:07+08:00",
        "monthlyValue": 25.9,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-11-08T08:00:07+08:00",
        "lastNotificationAttemptAt": "2026-11-08T08:00:07+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "已讶衾枕冷，复见窗户明。夜深知雪重，时闻折竹声。",
    "source": "白居易《夜雪》"
  }
};
