window.DASH_DATA = {
  "updatedAt": "2026-11-03T18:15:05+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "晴",
    "iconKey": "clear",
    "tempC": 10.65,
    "feelsLikeC": 9.1,
    "humidity": 50,
    "windKph": 3.25,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-03T18:04:49+08:00",
    "fetchedAt": "2026-11-03T18:15:05+08:00",
    "error": null,
    "checkedAt": "2026-11-03T18:15:05+08:00",
    "lastSuccessAt": "2026-11-03T18:15:05+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 10.48,
      "currency": "CNY",
      "detail": "余额 ¥10.48",
      "fetchedAt": "2026-11-03T18:15:00+08:00",
      "error": null,
      "checkedAt": "2026-11-03T18:15:05+08:00",
      "lastSuccessAt": "2026-11-03T18:15:05+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 16,
          "resetAt": "2026-11-03T22:49:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-03T18:15:05+08:00",
          "lastSuccessAt": "2026-11-03T18:15:05+08:00"
        },
        {
          "name": "7天",
          "usedPct": 57,
          "resetAt": "2026-11-05T19:59:59+08:00",
          "stale": false,
          "checkedAt": "2026-11-03T18:15:05+08:00",
          "lastSuccessAt": "2026-11-03T18:15:05+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-10-22T20:00:00+08:00",
          "stale": true,
          "checkedAt": "2026-11-03T18:15:05+08:00",
          "lastSuccessAt": "2026-10-18T04:15:03+08:00"
        }
      ],
      "fetchedAt": "2026-11-03T18:15:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-03T18:15:05+08:00",
      "lastSuccessAt": "2026-11-03T18:15:05+08:00",
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
          "checkedAt": "2026-11-03T18:15:05+08:00",
          "lastSuccessAt": "2026-11-03T18:15:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 39,
          "resetAt": "2026-11-04T14:53:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-03T18:15:05+08:00",
          "lastSuccessAt": "2026-11-03T18:15:05+08:00"
        }
      ],
      "fetchedAt": "2026-11-03T18:15:00+08:00",
      "error": null,
      "checkedAt": "2026-11-03T18:15:05+08:00",
      "lastSuccessAt": "2026-11-03T18:15:05+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": "2026-11-03T22:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-03T18:15:05+08:00",
          "lastSuccessAt": "2026-11-03T18:15:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 24,
          "resetAt": "2026-11-06T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-03T18:15:05+08:00",
          "lastSuccessAt": "2026-11-03T18:15:05+08:00"
        },
        {
          "name": "月",
          "usedPct": 19.1,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-11-02T08:00:04+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-11-03T18:15:05+08:00",
          "lastSuccessAt": "2026-11-02T08:00:04+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-11-03T18:15:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-03T18:15:05+08:00",
      "lastSuccessAt": "2026-11-03T18:15:05+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-11-03T08:00:07+08:00",
        "checkedAt": "2026-11-03T18:15:05+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-11-02T08:00:04+08:00",
        "monthlyValue": 19.1,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-11-03T08:00:07+08:00",
        "lastNotificationAttemptAt": "2026-11-03T08:00:07+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "寒夜客来茶当酒，竹炉汤沸火初红。寻常一样窗前月，才有梅花便不同。",
    "source": "杜耒《寒夜》"
  }
};
