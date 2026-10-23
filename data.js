window.DASH_DATA = {
  "updatedAt": "2026-10-23T13:54:01+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 15.75,
    "feelsLikeC": 14.8,
    "humidity": 61,
    "windKph": 5.82,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-10-23T12:11:40+08:00",
    "fetchedAt": "2026-10-23T13:54:01+08:00",
    "error": null,
    "checkedAt": "2026-10-23T13:54:01+08:00",
    "lastSuccessAt": "2026-10-23T13:54:01+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.53,
      "currency": "CNY",
      "detail": "余额 ¥10.53",
      "fetchedAt": "2026-10-23T13:54:00+08:00",
      "error": null,
      "checkedAt": "2026-10-23T13:54:01+08:00",
      "lastSuccessAt": "2026-10-23T13:54:01+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 23,
          "resetAt": "2026-10-23T16:29:59+08:00",
          "stale": false,
          "checkedAt": "2026-10-23T13:54:01+08:00",
          "lastSuccessAt": "2026-10-23T13:54:01+08:00"
        },
        {
          "name": "7天",
          "usedPct": 11,
          "resetAt": "2026-10-29T19:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-10-23T13:54:01+08:00",
          "lastSuccessAt": "2026-10-23T13:54:01+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-10-23T13:54:01+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-10-23T13:54:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-10-23T13:54:01+08:00",
      "lastSuccessAt": "2026-10-23T13:54:01+08:00",
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
          "checkedAt": "2026-10-23T13:54:01+08:00",
          "lastSuccessAt": "2026-10-23T13:54:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 15,
          "resetAt": "2026-10-30T01:09:14+08:00",
          "stale": false,
          "checkedAt": "2026-10-23T13:54:01+08:00",
          "lastSuccessAt": "2026-10-23T13:54:01+08:00"
        }
      ],
      "fetchedAt": "2026-10-23T13:54:00+08:00",
      "error": null,
      "checkedAt": "2026-10-23T13:54:01+08:00",
      "lastSuccessAt": "2026-10-23T13:54:01+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 14,
          "resetAt": "2026-10-23T16:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-23T13:54:01+08:00",
          "lastSuccessAt": "2026-10-23T13:54:01+08:00"
        },
        {
          "name": "周",
          "usedPct": 0,
          "resetAt": "2026-10-30T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-10-23T13:54:01+08:00",
          "lastSuccessAt": "2026-10-23T13:54:01+08:00"
        },
        {
          "name": "月",
          "usedPct": 15.9,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-10-22T08:00:04+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-10-23T13:54:01+08:00",
          "lastSuccessAt": "2026-10-22T08:00:04+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-10-23T13:54:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-10-23T13:54:01+08:00",
      "lastSuccessAt": "2026-10-23T13:54:01+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-10-23T08:00:02+08:00",
        "checkedAt": "2026-10-23T13:54:01+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-10-22T08:00:04+08:00",
        "monthlyValue": 15.9,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-10-23T08:00:02+08:00",
        "lastNotificationAttemptAt": "2026-10-23T08:00:02+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "矮纸斜行闲作草，晴窗细乳戏分茶。",
    "source": "陆游《临安春雨初霁》"
  }
};
