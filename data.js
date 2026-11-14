window.DASH_DATA = {
  "updatedAt": "2026-11-14T23:45:05+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "雾霾",
    "iconKey": "fog",
    "tempC": 4.05,
    "feelsLikeC": 2.8,
    "humidity": 98,
    "windKph": 1.45,
    "windDir": "",
    "place": "北京",
    "observedAt": "2026-11-14T21:35:39+08:00",
    "fetchedAt": "2026-11-14T23:45:05+08:00",
    "error": null,
    "checkedAt": "2026-11-14T23:45:05+08:00",
    "lastSuccessAt": "2026-11-14T23:45:05+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 4.17,
      "currency": "CNY",
      "detail": "余额 ¥4.17",
      "fetchedAt": "2026-11-14T23:45:00+08:00",
      "error": null,
      "checkedAt": "2026-11-14T23:45:05+08:00",
      "lastSuccessAt": "2026-11-14T23:45:05+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 16,
          "resetAt": "2026-11-15T03:30:00+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T23:45:05+08:00",
          "lastSuccessAt": "2026-11-14T23:45:05+08:00"
        },
        {
          "name": "7天",
          "usedPct": 10,
          "resetAt": "2026-11-19T20:00:00+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T23:45:05+08:00",
          "lastSuccessAt": "2026-11-14T23:45:05+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 0,
          "resetAt": "2026-11-19T20:00:00+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T23:45:05+08:00",
          "lastSuccessAt": "2026-11-14T23:45:05+08:00"
        }
      ],
      "fetchedAt": "2026-11-14T23:45:00+08:00",
      "error": null,
      "checkedAt": "2026-11-14T23:45:05+08:00",
      "lastSuccessAt": "2026-11-14T23:45:05+08:00",
      "stale": false
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
          "checkedAt": "2026-11-14T23:45:05+08:00",
          "lastSuccessAt": "2026-11-14T23:45:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 32,
          "resetAt": "2026-11-18T15:20:40+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T23:45:05+08:00",
          "lastSuccessAt": "2026-11-14T23:45:05+08:00"
        }
      ],
      "fetchedAt": "2026-11-14T23:45:00+08:00",
      "error": null,
      "checkedAt": "2026-11-14T23:45:05+08:00",
      "lastSuccessAt": "2026-11-14T23:45:05+08:00",
      "stale": false
    },
    "kimi": {
      "ok": true,
      "label": "Kimi",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 7,
          "resetAt": "2026-11-15T04:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T23:45:05+08:00",
          "lastSuccessAt": "2026-11-14T23:45:05+08:00"
        },
        {
          "name": "周",
          "usedPct": 12,
          "resetAt": "2026-11-20T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-11-14T23:45:05+08:00",
          "lastSuccessAt": "2026-11-14T23:45:05+08:00"
        },
        {
          "name": "月",
          "usedPct": 43.4,
          "resetAt": "2026-11-14T00:00:00+08:00",
          "observedAt": "2026-11-13T08:03:06+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-11-14T23:45:05+08:00",
          "lastSuccessAt": "2026-11-13T08:03:06+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-11-14T23:45:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-11-14T23:45:05+08:00",
      "lastSuccessAt": "2026-11-14T23:45:05+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-11-14T00:00:05+08:00",
        "checkedAt": "2026-11-14T23:45:05+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-11-13T08:03:06+08:00",
        "monthlyValue": 43.4,
        "monthlyResetAt": "2026-11-14T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-11-14T00:00:05+08:00",
        "lastNotificationAttemptAt": "2026-11-14T00:00:05+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "相知无远近，万里尚为邻。",
    "source": "张九龄《送韦城李少府》"
  }
};
