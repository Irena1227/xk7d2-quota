window.DASH_DATA = {
  "updatedAt": "2026-09-11T06:06:02+08:00",
  "weather": {
    "ok": true,
    "provider": "cyberboss",
    "description": "多云",
    "iconKey": "cloudy",
    "tempC": 21,
    "feelsLikeC": 23,
    "humidity": 91,
    "windKph": 4,
    "windDir": "西北风",
    "place": "北京",
    "observedAt": "2026-09-04T21:49:11+08:00",
    "fetchedAt": "2026-09-11T06:06:02+08:00",
    "error": null,
    "checkedAt": "2026-09-11T06:06:02+08:00",
    "lastSuccessAt": "2026-09-11T06:06:02+08:00",
    "stale": false
  },
  "sources": {
    "deepseek": {
      "ok": true,
      "label": "DeepSeek",
      "balance": 11.76,
      "currency": "CNY",
      "detail": "余额 ¥11.76",
      "fetchedAt": "2026-09-11T06:06:00+08:00",
      "error": null,
      "checkedAt": "2026-09-11T06:06:02+08:00",
      "lastSuccessAt": "2026-09-11T06:06:02+08:00",
      "stale": false
    },
    "claude": {
      "ok": true,
      "label": "Claude",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 9,
          "resetAt": "2026-09-11T06:50:00+08:00",
          "stale": false,
          "checkedAt": "2026-09-11T06:06:02+08:00",
          "lastSuccessAt": "2026-09-11T06:06:02+08:00"
        },
        {
          "name": "7天",
          "usedPct": 1,
          "resetAt": "2026-09-17T20:00:00+08:00",
          "stale": false,
          "checkedAt": "2026-09-11T06:06:02+08:00",
          "lastSuccessAt": "2026-09-11T06:06:02+08:00"
        }
      ],
      "fetchedAt": "2026-09-11T06:06:00+08:00",
      "error": null,
      "checkedAt": "2026-09-11T06:06:02+08:00",
      "lastSuccessAt": "2026-09-11T06:06:02+08:00",
      "stale": false
    },
    "codex": {
      "ok": true,
      "label": "Codex",
      "windows": [
        {
          "name": "周",
          "usedPct": 15,
          "resetAt": "2026-09-15T10:05:57+08:00",
          "stale": false,
          "checkedAt": "2026-09-11T06:06:02+08:00",
          "lastSuccessAt": "2026-09-11T06:06:02+08:00"
        },
        {
          "name": "30天",
          "usedPct": 0,
          "resetAt": "2026-09-12T02:18:01+08:00",
          "stale": true,
          "checkedAt": "2026-09-11T06:06:02+08:00",
          "lastSuccessAt": "2026-08-13T02:18:01+08:00"
        }
      ],
      "fetchedAt": "2026-09-11T06:06:00+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-09-11T06:06:02+08:00",
      "lastSuccessAt": "2026-09-11T06:06:02+08:00",
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
          "resetAt": "2026-09-11T09:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-09-11T06:06:02+08:00",
          "lastSuccessAt": "2026-09-11T06:06:02+08:00"
        },
        {
          "name": "周",
          "usedPct": 66,
          "resetAt": "2026-09-11T13:02:02+08:00",
          "stale": false,
          "checkedAt": "2026-09-11T06:06:02+08:00",
          "lastSuccessAt": "2026-09-11T06:06:02+08:00"
        },
        {
          "name": "月",
          "usedPct": 67.7,
          "resetAt": "2026-09-15T00:00:00+08:00",
          "observedAt": "2026-09-09T08:00:06+08:00",
          "stale": true,
          "healthCode": "monthly_login_required",
          "healthMessage": "月额度获取失败，当前为旧值",
          "checkedAt": "2026-09-11T06:06:02+08:00",
          "lastSuccessAt": "2026-09-09T08:00:06+08:00",
          "detailText": "⚠ 月额度获取失败，当前为旧值"
        }
      ],
      "fetchedAt": "2026-09-11T06:06:01+08:00",
      "error": "部分额度窗口沿用上次成功值",
      "checkedAt": "2026-09-11T06:06:02+08:00",
      "lastSuccessAt": "2026-09-11T06:06:02+08:00",
      "stale": false,
      "partialStale": true,
      "quotaWatch": {
        "status": "anomaly",
        "code": "monthly_login_required",
        "target": "月",
        "message": "月额度获取失败，当前为旧值",
        "firstSeenAt": "2026-09-10T08:00:09+08:00",
        "checkedAt": "2026-09-11T06:06:02+08:00",
        "weeklyIncreasePct": 0,
        "fiveHourIncreasePct": 0,
        "contradictionChecks": 0,
        "lastMonthlyObservedAt": "2026-09-09T08:00:06+08:00",
        "monthlyValue": 67.7,
        "monthlyResetAt": "2026-09-15T00:00:00+08:00",
        "notifiedStatus": "anomaly",
        "lastNotifiedAt": "2026-09-10T08:00:09+08:00",
        "lastNotificationAttemptAt": "2026-09-10T08:00:09+08:00",
        "notificationError": null
      }
    }
  },
  "quote": {
    "text": "人生代代无穷已，江月年年只相似。",
    "source": "张若虚《春江花月夜》"
  }
};
